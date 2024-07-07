import React from "react";
import "../Popup/index.scss";
import LoginPop from "../LoginPop";
function Popup({ onClose }) {
  return (
    <div className="popup">
      <div className="popup-content">
        <LoginPop onClose={onClose} />
      </div>
    </div>
  );
}
export default Popup;
