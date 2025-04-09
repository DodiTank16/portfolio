import React, { useContext, useEffect, useState } from "react";
import { WiMoonAltWaningCrescent4 } from "react-icons/wi";
import { ThemeContext } from "../../context/ThemeContext";


const Themetoggle = () => {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <div className="nav_ac" onClick={toggleTheme}>
      <WiMoonAltWaningCrescent4 />
    </div>
  );
};

export default Themetoggle;
