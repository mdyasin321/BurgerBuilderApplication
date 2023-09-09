import React,{useContext} from "react";
import BurgerIngredients from "./BurgerIngredients/BurgerIngrdients";
import BurgerIngredientsContext from "../../Store/BurgerIngrdients-context/BurgerIngredients-context";
import classes from './Burger.module.css';

const Burger=()=>{

    const ctx=useContext(BurgerIngredientsContext);

    console.log(ctx.totalPrice+"in Burger")
    const ingredients=ctx.ingredients.map((element)=>{
        return (
            [...Array(element.count)].map((_,i)=>{
                return (
                    <BurgerIngredients type={element.label}></BurgerIngredients>
                )
            })
        )
    })
    return (
        <div className={classes.Burger}>
            <BurgerIngredients type={'BreadTop'}></BurgerIngredients>
            {ingredients.length>0 ?ingredients : <h3>Start Adding Items</h3>}
            <BurgerIngredients type={'BreadBottom'}></BurgerIngredients>
        </div>
    )
}
export default Burger;