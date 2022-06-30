import React from 'react';
import './MenuBar.css';
import { FiFileText } from "react-icons/fi";

function MenuBar() {
  return (
    <>
    <div className="menubar-container">
        <div className="first-div"></div>
        <div className="second-div">
            <span><FiFileText/>&nbsp;&nbsp; MENU</span>
        </div>
        <div className="third-div"></div>
    </div>
    </>
  )
}

export default MenuBar