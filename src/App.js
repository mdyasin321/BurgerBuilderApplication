import React, { useState } from "react";
import Layout from "./Components/Layout/Layout";
import BurgerBuilder from "./Components/BurgerBuilder/BurgerBuilder";
import BurgerIngredientProvider from "./Store/BurgerIngrdients-context/BurgerIngredientProvider";

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [showSideDrawer, setShowSideDrawer] = useState(false);

  const showModalHandler = () => {
    HideshowSideDrawerHandler();

    setShowModal(true);
  };

  const HideshowModalHandler = () => {
    setShowModal(false);
  };

  const showSideDrawerHandler = () => {
    setShowSideDrawer(true);
  };

  const HideshowSideDrawerHandler = () => {
    setShowSideDrawer(false);
  };

  return (
    <>
      <BurgerIngredientProvider>
        <Layout
          showSideDrawer={showSideDrawer}
          showSideDrawerHandler={showSideDrawerHandler}
          HideshowSideDrawerHandler={HideshowSideDrawerHandler}
          showModalHandler={showModalHandler}
        >
          <BurgerBuilder
            showModalHandler={showModalHandler}
            hideShowModalHandler={HideshowModalHandler}
            modalShow={showModal}
          ></BurgerBuilder>
        </Layout>
      </BurgerIngredientProvider>
    </>
  );
};

export default App;
