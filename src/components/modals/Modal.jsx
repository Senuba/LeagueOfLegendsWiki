import React from "react";
import { createPortal } from "react-dom";
import "../../assets/styles/components/Modal.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle} from '@fortawesome/free-solid-svg-icons'


const Modal = (props) => (
  props.isOpen
    ? createPortal(
        <div className="modal">
          <figure onClick={props.onClose} className="modal__close">
            <FontAwesomeIcon icon={faTimesCircle} className="icono" />
          </figure>
          <div className="modal__container">{props.children}</div>
        </div>,
        document.getElementById("modal"),
      )
    : ""
);

export default Modal;
