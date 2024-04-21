import { type Children } from '../App';

import classes from '../assets/sass/NavItem.module.sass'

const NavItem = ({ children}: Children) => {
  return <button className={classes.item}>{children}</button>;
};

export default NavItem;
