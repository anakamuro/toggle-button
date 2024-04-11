import React from 'react';
import "./Switch.css";
import cx from "classnames";

function Switch({rounded = false, isToggled, onToggle, changeTheme}) {
    const sliderCX = cx("slider", {
        rounded: rounded
    })
  return (
    <div>
        <label className="switch">
            <input type="checkbox" checked={isToggled} onChange={onToggle}/>
            <span className={sliderCX}/>
        </label>
    </div>
  )
}

export default Switch