import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";

import List from "@material-ui/core/List";

import AssigmentSelectionIcon from "@material-ui/icons/FindInPageOutlined";
import ClientsIcon from "@material-ui/icons/PeopleOutline";
import IssuesIcon from "@material-ui/icons/ErrorOutline";
import DocRequestIcon from "@material-ui/icons/DescriptionOutlined";
import UsersIcon from "@material-ui/icons/SupervisedUserCircleOutlined";
import ConfigSubheadsIcon from "@material-ui/icons/CheckCircleOutlineOutlined";
import ConfigChecklistIcon from "@material-ui/icons/AssignmentOutlined";

import MenuItem from "./MenuItem";

const MenuItems = [
  {
    label: "Assignment Selection",
    order: 0,
    Icon: AssigmentSelectionIcon,
    route: "/",
  },
  {
    label: "My Clients",
    order: 1,
    Icon: ClientsIcon,
    route: "/clients",
  },
  {
    label: "Issues",
    order: 2,
    Icon: IssuesIcon,
    route: "/issues",
  },
  {
    label: "Doc Requests",
    order: 3,
    Icon: DocRequestIcon,
    route: "/requests",
  },

  {
    label: "Users",
    order: 4,
    Icon: UsersIcon,
    route: "/users",
  },
  { label: "Settings" },
  {
    label: "Configuration Subheads",
    order: 5,
    Icon: ConfigSubheadsIcon,
    route: "/subheads",
  },
  {
    label: "Configure Checklist",
    order: 6,
    Icon: ConfigChecklistIcon,
    route: "/checklist",
  },
];

const Menu: React.FC = () => {
  const classes = useStyles();

  return (
    <List component="nav" className={classes.appMenu} disablePadding>
      {/* <MenuItem {...MenuItems[0]} /> */}
      {MenuItems.map((item, index) => (
        <MenuItem {...item} key={index} />
      ))}
    </List>
  );
};

const drawerWidth = 240;

const useStyles = makeStyles((theme) =>
  createStyles({
    appMenu: {
      width: "100%",
    },
    navList: {
      width: drawerWidth,
    },
    menuItem: {
      width: drawerWidth,
    },
  })
);

export default Menu;
