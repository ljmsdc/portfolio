import { ReactNode } from "react";
import Nav from "./components/Nav";
import Background from "./components/Background";

import classes from './assets/sass/App.module.sass'

export type Children = {
  children: ReactNode;
};

const App = () => {
  return (
    <div className={classes.app}>
      <Nav />
      <Background classNames="container">
        <></>
      </Background>
    </div>
  );
};

export default App;
