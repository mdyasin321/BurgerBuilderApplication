
import React from "react";

const BurgerIngredientsContext= React.createContext({

    ingredients:[],
    totalPrice:0,
    addIngredeientHandler:()=>{},
    removeIngredeientHandler:()=>{},

})

export default BurgerIngredientsContext;