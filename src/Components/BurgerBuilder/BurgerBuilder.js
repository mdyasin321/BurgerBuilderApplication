import React , {useState} from "react";
import Burger from "../Burger/Burger";
import BuildControls from "../BuildConrols/BuildControls";
import OrderSummary from "../OrderSummary/OrderSummary";
import Modal from "../UI/Modal";
import classes from "./BurgerBuilder.module.css";
import SubmitSucess from "../SubmitSuccess/SubmitSuccess";

const BurgerBuilder = (props) => {

  const[showSubmitSuccess, setShowSubmitSuccess]=useState(false);

const showSubmitSuccessHandler=()=>{

  // first closing the cart modal before showing the submitSuccessModal
  props.showModalHandler();

  setShowSubmitSuccess(true);

}

const HideSubmitSuccessHandler=()=>{

  setShowSubmitSuccess(false);

}

  return (
    <div className={classes.burgerBuilder}>
      {/*       
      by using this technique to show modal, I was unable to use perform animations */}

      {props.modalShow === true && (
        <Modal showOrCloseBackdrop={props.showModalHandler}>
          {
            <OrderSummary  showSubmitSuccess={showSubmitSuccessHandler}
              closeModalOrShowModalHandler={props.showModalHandler}
            />
          }
        </Modal>
      )}
      { showSubmitSuccess===true && <Modal showOrCloseBackdrop={HideSubmitSuccessHandler}  >{<SubmitSucess></SubmitSucess>}</Modal>}

      

      <Burger></Burger>
      <p className={classes.paragraph}>Burger Builder Controller</p>
      <BuildControls
        closeModalOrShowModalHandler={props.showModalHandler}
      ></BuildControls>
    </div>
  );
};

export default BurgerBuilder;
