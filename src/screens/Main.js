import React, { useEffect, useState } from "react";

import "../css/Main.css";

import Header from "../components/Header";
import Home from "./Home";
import Videos from "./Videos";
import Friends from "./Friends";
import Store from "./Store";
import Games from "./Games";
import LeftBar from "../components/LeftBar";

export default () => {
  const [currentScreen, setCurrentScreen] = useState("home");

  const changeScreen = (newScreen) => {
    setCurrentScreen(newScreen);
    console.log(currentScreen);
  };

  return (
    <div className="mainApp">
      <Header currentScreen={currentScreen} onClickIconButton={changeScreen} />
        <div className="leftBar">
          <LeftBar />
        </div>
      <div className="rowContent">
        {currentScreen === "home" && <Home />}
        {currentScreen === "videos" && <Videos />}
        {currentScreen === "friends" && <Friends />}
        {currentScreen === "store" && <Store />}
        {currentScreen === "games" && <Games />}
      </div>
    </div>
  );
};
