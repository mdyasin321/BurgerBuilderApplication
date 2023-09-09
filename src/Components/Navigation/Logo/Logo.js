import burgerLogo from '../../../Assets/images/burger-logo.png'
import classes from './Logo.module.css'
const Logo =()=>{

    return (
        <div className={classes.Logo}>
            <img className={classes.image} src={burgerLogo} alt='My Burger'/>
        </div>
    )
}
export default Logo;