import React ,{useState} from "react";
import Layout from "./Components/Layout/Layout";
import BurgerBuilder from "./Components/BurgerBuilder/BurgerBuilder";
import BurgerIngredientProvider from "./Store/BurgerIngrdients-context/BurgerIngredientProvider";

const App = () => {
  const [showModal,setShowModal]= useState(false)

  const showModalHandler =()=>{

    setShowModal((prevState)=>{
      console.log("inside showModal handler")
      return ( 
        !prevState
      )
    })
  }
  return (
    <>
      <BurgerIngredientProvider>
        <Layout  showModalHandler={showModalHandler}>
          <BurgerBuilder showModalHandler={showModalHandler}  modalShow={showModal}></BurgerBuilder>
        </Layout>
      </BurgerIngredientProvider>
    </>
  );
};

export default App;
