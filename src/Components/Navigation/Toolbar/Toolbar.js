import classes from './Toolbar.module.css'
import Logo from '../Logo/Logo';
import HeaderCartButton from './HeaderCartButton';
import Menu from './Menu';


const Toolbar=(props)=>{

    return (

        <header className={classes.Toolbar}>
            <Menu clicked={props.showSideDrawerHandler}></Menu>
            <Logo></Logo>
            <HeaderCartButton showModalHandler={props.closeModalOrShowModalHandler}></HeaderCartButton>
        </header>

    )
}

export default Toolbar;