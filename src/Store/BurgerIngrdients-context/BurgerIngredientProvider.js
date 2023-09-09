import React , {useReducer} from "react"
import BurgerIngredientsContext from "./BurgerIngredients-context";

const defaultBurgerState={

    ingredients:[],
    totalPrice:4

}

const BurgerReducer=(prevState, action)=>{

    if(action.type==="Add"){

        let updatedItem;
        let updatedPrice;

        let existingItemIndex=prevState.ingredients.findIndex((element)=>{
            return (
                element.id===action.item.id
            )
        })

        const newIngredientsArray=[...prevState.ingredients];
        const existingItem=newIngredientsArray[existingItemIndex];
        if(existingItem!=null){
            newIngredientsArray[existingItemIndex]={
                ...existingItem,
                count:existingItem.count+1
            }
         updatedItem=newIngredientsArray
        


        }
        else{
            updatedItem=[...prevState.ingredients,action.item]
        }

        updatedPrice=prevState.totalPrice+action.item.price;

        console.log(updatedItem);

        return {
            ingredients:updatedItem,
            totalPrice:updatedPrice
        }

    }

    /////////////////////////////////////////////////////////


    if(action.type==="Remove"){

        let updatedItem;
        let updatedPrice;

        let existingItemIndex=prevState.ingredients.findIndex((element)=>{
            return (
                element.id===action.id
            )
        })

        const newIngredientsArray=[...prevState.ingredients];
        const existingItem=newIngredientsArray[existingItemIndex];
        updatedItem=newIngredientsArray
        if(existingItem !=null && existingItem.count>1){
            newIngredientsArray[existingItemIndex]={
                ...existingItem,
                count:existingItem.count-1
            }
         updatedItem=newIngredientsArray
         updatedPrice=prevState.totalPrice-existingItem.price;
         


        }

        else if(existingItem !=null && existingItem.count===1){
            newIngredientsArray.splice(existingItemIndex,1)
            updatedItem=newIngredientsArray
            updatedPrice=prevState.totalPrice-existingItem.price;
        }

        else if(existingItem ==null){
        updatedPrice=prevState.totalPrice
        }

        return {
            ingredients:updatedItem,
            totalPrice:updatedPrice
        }

    }


    return defaultBurgerState;
   

}

const BurgerIngredientProvider =(props)=>{

    const [bugerItems,dispatchItems]=useReducer(BurgerReducer,defaultBurgerState);


    const addIngredient=(ingredient)=>{

        console.log("Add");

        dispatchItems({type:'Add', item:ingredient})

    }

    const removeIngredient=(id)=>{

        dispatchItems({type:'Remove', id:id})

    }


    const dummyContextValue={

        ingredients:bugerItems.ingredients,
        totalPrice:bugerItems.totalPrice,
        addIngredeientHandler:addIngredient,
        removeIngredeientHandler:removeIngredient

       }

    return (

        <BurgerIngredientsContext.Provider value={dummyContextValue}>
            {props.children}
        </BurgerIngredientsContext.Provider>
    )
}

export default BurgerIngredientProvider;