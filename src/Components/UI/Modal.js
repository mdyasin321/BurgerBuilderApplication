import React from 'react';
import { createPortal } from 'react-dom';
import classes from './Modal.module.css';
import Backdrop from './Backdrop';

const Modal=(props)=>{

    // let attachedClases=[classes.modal, classes.Close]

    // if(props.modalShow===true){

    //     attachedClases=[classes.modal, classes.Open]
    // }



  const ModalDescription=(props)=>{

    return (
        <div className={classes.modal}>
            <div>{props.children}</div>
        </div>
    )
  }



    return (
        <React.Fragment>

            { createPortal( <Backdrop clicked={props.closeBackdropAndModal}></Backdrop>, document.getElementById("backdrop-root"))}
            { createPortal(<ModalDescription>{props.children}</ModalDescription>, document.getElementById("modaloverlay-root"))}
                                                     {/* //OR */}
            {/* {ReactDOM.createPortal(<ModalDescription>{props.children}</ModalDescription>, document.getElementById("modaloverlay-root"))}                                          */}
        </React.Fragment>

    )

}

export default Modal;