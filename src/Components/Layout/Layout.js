import React, { useState } from "react";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

const Layout = (props) => {
  return (
    <>
      <div>
        <Toolbar
          showSideDrawerHandler={props.showSideDrawerHandler}
          showModalHandler={props.showModalHandler}
        ></Toolbar>

        {/* here I am showing sideDrawer conditionaly using css classes  */}
        <SideDrawer
          showModalHandler={props.showModalHandler}
          HideshowSideDrawerHandler={props.HideshowSideDrawerHandler}
          showSideDrawer={props.showSideDrawer}
        ></SideDrawer>
      </div>
      <main>{props.children}</main>
    </>
  );
};

export default Layout;
