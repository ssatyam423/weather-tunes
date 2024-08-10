import React from "react"

function FadeElement(props){
    var ID = 0;
    var opacity = 1;
    function disappear(){
        ID = setInterval(fadeOut, 200)
    }
    function fadeOut(){
        var content = document.querySelector(".fadyText")
        opacity = Number(getComputedStyle(document.querySelector(".fadyText")).getPropertyValue("opacity"))
        opacity = opacity - 0.05;
        content.style.opacity = opacity
        if(opacity <= 0){
            clearInterval(ID);
        }
    }
    return(
        <div>
            <h1 className="fadyText">{props.text}</h1>
            {disappear()}
        </div>
    )
    }

export default FadeElement