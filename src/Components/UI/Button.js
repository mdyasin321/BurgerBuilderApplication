import classes from "./Button.module.css"

const Button =(props)=>{

    return ( 
        // I have used array in className because I want to use multiple stylings 
        <button className={[classes.Button,classes[props.btnType]].join(' ')} onClick={props.clicked}>{props.children}</button>
    )
}

export default Button;