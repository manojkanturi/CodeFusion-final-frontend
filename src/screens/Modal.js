import React from "react";
const Modal = ({ handleClose, show, children, modalText }) => {
  // showHideClassName = show ? "modal display-block" : "modal display-none";
  return (
    <div
      className={
        show ? "modal display-block-component" : "modal display-none-component"
      }
    >
      <section className="modal-main-component">
        {/* {children}
        <button onClick={handleClose}>close</button> */}
        <div className="modal-content">
          <div className="modal-header">
            <h5
              className="modal-title modal-body1"
              id="exampleModalLongTitle"
              style={{ fontWeight: "bold", color: "green" }}
            >
              Code Fusion
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body modal-body1" style={{ fontWeight: "bold" }}>
            {modalText}
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleClose}
            >
              OK
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Modal;
