import React, { useState, useEffect } from 'react';
import btnDark from "../../images/btnDark.png";
import btnLight from "../../images/btnLight.png";

function DarkMode() {
  const [checked, setChecked] = useState(localStorage.getItem("theme") === "dark" ? true : false); 

  useEffect(() => {
    document
    .getElementsByTagName("HTML")[0]
    .setAttribute("data-theme", localStorage.getItem("theme")); 
  }, [checked]);

  const toggleThemeChange = () => {
    if (checked === false) {
      localStorage.setItem("theme", "dark");
        
      setChecked(true);
    } else {
      localStorage.setItem("theme", "light");
    
      setChecked(false);
    }
  }

  return (
    <img src={checked ? btnLight  : btnDark} alt="btn" onClick={toggleThemeChange} className="switch" />
  )
}

export default DarkMode