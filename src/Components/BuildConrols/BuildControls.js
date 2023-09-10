import React, { useContext } from "react";
import BuildControl from "./BuildControl/BuildControl";
import BurgerIngredientsContext from "../../Store/BurgerIngrdients-context/BurgerIngredients-context";

import classes from "./BuildControls.module.css";

const BuildControls = (props) => {
  const ctx = useContext(BurgerIngredientsContext);

  const ingredeientLabels = [
    { id: 1, label: "Bacon", count: 0, price: 10 },
    { id: 2, label: "Salad", count: 0, price: 5 },
    { id: 3, label: "Meat", count: 0, price: 15 },
  ];

  return (
    <div className={classes.buildControls}>
      <p className={classes.currentPrice}>
        <strong>Current Price :- ${ctx.totalPrice.toFixed(2)}</strong>
      </p>
      <div className={classes.divBuildControl}>
        {ingredeientLabels.map((element) => {
          return (
            <BuildControl
              key={element.id}
              id={element.id}
              label={element.label}
              count={element.count}
              price={element.price}
            ></BuildControl>
          );
        })}
      </div>
      <button
        className={classes.Order}
        disabled={ctx.ingredients.length <= 0}
        onClick={props.showModalHandler}
      >
        ORDER NOW
      </button>
    </div>
  );
};

export default BuildControls;
