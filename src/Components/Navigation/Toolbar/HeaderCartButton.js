import React from "react";
import classes from './HeaderCartButton.module.css';
import CartIcon from "./CartIcon";

const HeaderCartButton = (props) => {
  return (
    <button className={classes.button} onClick={props.showModalHandler}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Cart</span>
    </button>
  );
};

export default HeaderCartButton;
