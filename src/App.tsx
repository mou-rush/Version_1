import React from "react";
import clsx from "clsx";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

import AppMenu from "./components/Menu";

const DashboardPage = () => (
  <Typography variant="h3" component="h1">
    Dashboard Page
  </Typography>
);
const ClientPage = () => (
  <Typography variant="h3" component="h1">
    Clients
  </Typography>
);
const IssuesPage = () => (
  <Typography variant="h3" component="h1">
    Issues
  </Typography>
);
const DocRequestPage = () => (
  <Typography variant="h3" component="h1">
    Document Request
  </Typography>
);
const UsersPage = () => (
  <Typography variant="h3" component="h1">
    Users
  </Typography>
);
const ConfigSubPage = () => (
  <Typography variant="h3" component="h1">
    Configuration Subheads
  </Typography>
);
const ConfigChecklistPage = () => (
  <Typography variant="h3" component="h1">
    Configuration Checklist
  </Typography>
);

const App: React.FC = () => {
  const classes = useStyles();

  return (
    <BrowserRouter>
      <div className={clsx("App", classes.root)}>
        <CssBaseline />
        <Drawer
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <AppMenu />
        </Drawer>
        <main className={classes.content}>
          <Container maxWidth="lg" className={classes.container}>
            <Switch>
              <Route path="/" exact component={DashboardPage} />
              <Route path="/clients" component={ClientPage} />
              <Route path="/issues" component={IssuesPage} />
              <Route path="/requests" component={DocRequestPage} />
              <Route path="/users" component={UsersPage} />
              <Route path="/subheads" component={ConfigSubPage} />
              <Route path="/checklist" component={ConfigChecklistPage} />
            </Switch>
          </Container>
        </main>
      </div>
    </BrowserRouter>
  );
};

const drawerWidth = 260;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    color: "black",
  },
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}));

export default App;
