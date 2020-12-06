import React from "react";
import ReactDOM from "react-dom";

function Modal(props) {
  return ReactDOM.createPortal(
    <div onClick={() => props.onOutClick()} className="ui active dimmer">
      <div onClick={e => e.stopPropagation()} className="ui modal active">
        <div className="header">{props.headerText}</div>
        <div className="content">
          <p>{props.description}</p>
        </div>
        <div className="actions">
          {props.actions}
        </div>
      </div>
    </div>,
    document.querySelector("#modal")
  );
}

export default Modal;
