import React from "react";
import PropTypes from "prop-types";
import { makeStyles, createStyles } from "@material-ui/core/styles";
// import { SvgIconProps } from '@material-ui/core/SvgIcon'

import List from "@material-ui/core/List";

import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Collapse from "@material-ui/core/Collapse";

import IconExpandLess from "@material-ui/icons/ExpandLess";
import IconExpandMore from "@material-ui/icons/ExpandMore";

import MenuItemComponent from "./MenuItemComponent";

// runtime PropTypes
export const MenuItemPropTypes = {
  label: PropTypes.string.isRequired,
  route: PropTypes.string,
  Icon: PropTypes.elementType,
  items: PropTypes.array,
};

{
  /*TypeScript compile-time props type, infered from propTypes,
 following website used for reference:
https://dev.to/busypeoples/notes-on-typescript-inferring-react-proptypes-1g88/
*/
}
type MenuItemPropTypes = PropTypes.InferProps<typeof MenuItemPropTypes>;
type MenuItemPropsWithoutItems = Omit<MenuItemPropTypes, "items">;

// Improve child items declaration
export type MenuItemProps = MenuItemPropsWithoutItems & {
  items?: MenuItemProps[];
};

const MenuItem: React.FC<MenuItemProps> = (props) => {
  const { label, route, Icon, items = [] } = props;
  const classes = useStyles();
  const isExpandable = items && items.length > 0;
  const [open, setOpen] = React.useState(false);

  function handleClick() {
    setOpen(!open);
  }

  const MenuItemRoot = (
    <MenuItemComponent
      className={classes.menuItem}
      link={route}
      onClick={handleClick}
    >
      {/* Display an icon if any */}
      {!!Icon && (
        <ListItemIcon>
          <Icon />
        </ListItemIcon>
      )}
      <ListItemText primary={label} inset={!Icon} />
      {/* Display the expand menu if the item has children */}
      {isExpandable && !open && <IconExpandMore />}
      {isExpandable && open && <IconExpandLess />}
    </MenuItemComponent>
  );

  const MenuItemChildren = isExpandable ? (
    <Collapse in={open} timeout="auto" unmountOnExit>
      <Divider />
      <List component="div" disablePadding>
        {items.map((item, index) => (
          <MenuItem {...item} key={index} />
        ))}
      </List>
    </Collapse>
  ) : null;

  return (
    <>
      {MenuItemRoot}
      {MenuItemChildren}
    </>
  );
};

const useStyles = makeStyles((theme) =>
  createStyles({
    menuItem: {
      "&.active": {
        background: "#ccfff2",
      },
    },
  })
);

export default MenuItem;
