import NavItem from "./NavItem";

import classes from "../assets/sass/Nav.module.sass";

const Nav = () => {
  const items = ["Me", "Projects", "Degrees"];
  return (
    <div className={classes.nav}>
      {items.map((topic, index) => (
        <NavItem key={index}>
          {topic}
        </NavItem>
      ))}
    </div>
  );
};

export default Nav;
