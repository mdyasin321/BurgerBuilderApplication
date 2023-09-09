import React , {useContext} from "react";
import BurgerIngredientsContext from "../../../Store/BurgerIngrdients-context/BurgerIngredients-context";
import classes from './BuildControl.module.css';

const BuildControl =({id, label,count,price})=>{

    //
    const ctx=useContext(BurgerIngredientsContext)

    const addingIngredeient=()=>{

            //using closures
        const ingredient={
            id:id,
            label:label,
            price:price,
            count:1
        }


        ctx.addIngredeientHandler(ingredient);

    }


    const removingIngredeient=()=>{

            //using closures
        const ingredient={
            id:id
        }

       ctx.removeIngredeientHandler(ingredient.id)
    }

    return (
        <div className={classes.ingredientRow}>
            <h2 className={classes.label}>{label}</h2>
            <button  className={classes.add} onClick={addingIngredeient}>Add</button>
            <button className={classes.remove} onClick={removingIngredeient}  disabled={ctx.ingredients.length<=0}>Remove</button>
        </div>

    )
}

export default BuildControl;