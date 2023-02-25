import React from "react";

export default function SwitchTheme(){
  function switchTheme(e){
    console.log("switch theme to ...")
    const theme = e.target
    console.log(theme)
    theme.classList.toggle('night')
    
    // if(!theme.className.contains('night')){
    // }

  }
  return (
    <div> 
      <div className="switch-theme" onClick={ e => {switchTheme(e)}}></div> 
    </div>
  )
}