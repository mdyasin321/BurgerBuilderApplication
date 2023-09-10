import React, { useContext } from "react";
import BurgerIngredientsContext from "../../Store/BurgerIngrdients-context/BurgerIngredients-context";
import Button from "../UI/Button";

const OrderSummary = (props) => {
  const ctx = useContext(BurgerIngredientsContext);

  const items = ctx.ingredients.map((element) => {
    return (
      <li key={element.id}>
        <span>{element.label}</span> {element.count}
      </li>
    );
  });

  console.log(items +"---------------")

  return (
    <div>
      <h3>Your Order</h3>
      <p>A delicious Burger with following ingredients</p>
      <ul>{items}</ul>
      <p><strong>Total Price :- ${ctx.totalPrice.toFixed(2)}</strong></p>
      {ctx.ingredients.length>0 ?  <p>Continue to checkout ?</p>  : <p>No Items Added</p>}
      {/* //// */}
      <Button  clicked={props.closeBackdropAndModal} btnType='Danger'>CANCEL</Button>
      {ctx.ingredients.length>0 && <Button btnType='Success' clicked={props.showSubmitSuccess} >CONTINUE</Button>} 
    </div>
  );
};

export default OrderSummary;
