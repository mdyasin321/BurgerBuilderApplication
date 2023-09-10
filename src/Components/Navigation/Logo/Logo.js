import burgerLogo from '../../../Assets/images/burger-logo.png'
import classes from './Logo.module.css'
const Logo =(props)=>{

    return (
        <div className={classes.Logo} onClick={props.clicked}>
            <img className={classes.image} src={burgerLogo} alt='My Burger'/>
        </div>
    )
}
export default Logo;