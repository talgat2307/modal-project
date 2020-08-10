import React from 'react';
import './Modal.css';
import Backdrop from '../Backdrop/Backdrop';

const Modal = (props) => (
  <>
    <Backdrop show={props.modalShow} clicked={props.closed}/>
    <div
      className={'Modal'}
      style={{
        transform: props.modalShow ? 'translateY(0)' : 'translateY(-180vh)',
        opacity: props.modalShow ? '1' : '0',
      }}
    >
      <div className='modal-header'>
        <h4 className="modal-title">Modal title</h4>
        <button type="button" className="close" data-dismiss="modal"
                aria-label="Close"
                onClick={props.modalCloseButton}>
          <span aria-hidden="true">X</span>
        </button>
      </div>
      <div className='modal-body'>
        {props.children}
      </div>
      <div className='modal-footer'>
        <button type="button" className="btn btn-success"
                onClick={props.addAlert}>
          Add alert
        </button>
        <button type="button" className="btn btn-danger"
                onClick={props.modalCloseButton}>
          Close
        </button>
        <button type="button" className="btn btn-primary"
                onClick={props.modalSaveButton}>
          Save
        </button>
      </div>
    </div>
  </>
);
export default Modal;
