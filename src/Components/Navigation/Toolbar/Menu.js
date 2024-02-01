import React,{memo} from "react";
import classes from './Menu.module.css'

const Menu=(props)=>{

    return (
        <div className={classes.menu} onClick={props.clicked}>
            <div className={classes.div}></div>
            <div className={classes.div}></div>
            <div className={classes.div}></div>
        </div>

    )
}

export default Menu;