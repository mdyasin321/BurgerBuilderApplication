import React ,{useState} from "react";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

const Layout =(props)=>{

    const[showSideDrawer, setShowSideDrawer]= useState(false);


    const showSideDrawerHandler =()=>{

        setShowSideDrawer((prevState) =>{
            return (
                !prevState
            )
        })
    }
    return (
        <>
        <div>
            <Toolbar  showSideDrawerHandler={showSideDrawerHandler}  closeModalOrShowModalHandler={props.showModalHandler}></Toolbar>
            
            {/* here I am showing sideDrawer conditionaly using css classes  */}
            <SideDrawer showSideDrawerHandler={showSideDrawerHandler}  showSideDrawer={showSideDrawer} ></SideDrawer>
            
        </div>
        <main>
            {props.children}
        </main>
        </>
    )
}

export default Layout;