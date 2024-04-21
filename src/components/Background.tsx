import { type Children } from "../App";
import "../assets/sass/Background.sass";

type Styles = {
    classNames: string
}

const Background = ({ children, classNames }: Children & Styles) => {
  return <div className={classNames}>{children}</div>;
};

export default Background;
