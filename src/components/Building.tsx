import Background from "./Background";
import { type Children } from "../App";
import classes from "../assets/sass/Building.module.sass";
import Logo from "../assets/imgs/ljms.png";

const Building = ({ children }: Children) => {
  return (
    <Background classNames="building">
      <img src={Logo} alt="Logo" className={classes.logo} />
      <p className={classes.pharse}>{children}</p>
    </Background>
  );
};

export default Building;
