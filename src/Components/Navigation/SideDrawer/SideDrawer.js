import React from "react";
import Logo from "../Logo/Logo";
import classes from "./SideDrawer.module.css";
import HeaderCartButton from "../Toolbar/HeaderCartButton";
import Backdrop from "../../UI/Backdrop";

const SideDrawer = (props) => {
  let attchedClasses = [classes.sideDrawer, classes.Close];

  if (props.showSideDrawer === true) {
    attchedClasses = [classes.sideDrawer, classes.Open];
  }

  return (
    <React.Fragment>
      {/* here both backrop and sideDrawer is not showing because the props.showSideDrawer is false as default */}

      {props.showSideDrawer === true && (
        <Backdrop clicked={props.HideshowSideDrawerHandler}></Backdrop>
      )}
      <div className={attchedClasses.join(" ")}>
        <div className={classes.sideDrawerHeader}>
          <p>Menu</p>
        </div>
        <div className={classes.Logo}>
          <Logo clicked={props.HideshowSideDrawerHandler}></Logo>
        </div>
        <HeaderCartButton
          showModalHandler={props.showModalHandler}
        ></HeaderCartButton>
      </div>
    </React.Fragment>
  );
};

export default SideDrawer;
