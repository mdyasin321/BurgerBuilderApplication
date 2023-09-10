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

    let disabledInfo=true;

    for (let x of ctx.ingredients) {

        if(x.id===id && x.count>0){

            disabledInfo=false;
        }
        
      }

    return (
        <div className={classes.ingredientRow}>
            <h2 className={classes.label}>{label}</h2>
            <button  className={classes.add} onClick={addingIngredeient}>Add</button>
            <button className={classes.remove} onClick={removingIngredeient}  disabled={disabledInfo}>Remove</button>
        </div>

    )
}

export default BuildControl;