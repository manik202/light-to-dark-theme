import React, { useEffect, useState } from 'react';
import "./DarkToLight.css"

const DarkToLight = () => {
    const [theme, setTheme]=useState(false);

const handleClick=()=>{
    setTheme(!theme)
}

    useEffect(() => {
      
    if(theme===true){
        document.body.classList.add("dark");
    }else {
        document.body.classList.remove("dark")
    }
    })
    
  return (
    <div>
        <button onClick={handleClick}>Dark</button>
        <h1>Theme color in React</h1>
        <span>Light and Dark theme</span>
    </div>
  )
}

export default DarkToLight