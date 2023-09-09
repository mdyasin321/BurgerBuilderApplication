import React from "react";
import classes from "./BurgerIngredients.module.css";

const BurgerIngredients = ({ type }) => {
  let ingredient = null;
  switch (type) {
    case "Salad":
      ingredient = <div className={classes.Salad}></div>;
      break;
    case "Bacon":
      ingredient = <div className={classes.Bacon}></div>;
      break;
    case "Meat":
      ingredient = <div className={classes.Meat}></div>;

      break;

    case "BreadTop":
      ingredient = <div className={classes.BreadTop}>
                                <div className={classes.Seeds1}></div>
                        <div className={classes.Seeds2}></div></div>;

      break;
    case "BreadBottom":
      ingredient = <div className={classes.BreadBottom}></div>;

      break;
    default:
      ingredient = <div>Wrong item is entered</div>;
  }

  return ( ingredient );
};

export default BurgerIngredients;
