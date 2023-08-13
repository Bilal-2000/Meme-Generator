import React from "react";
import meme from "../images/Troll Face.png"

export default function Header(){
    return(
        <div className="header">
            <div className="header-img">
                <img src={meme} alt="meme"></img>
                <span>Meme Generator</span>
            </div>
            <div className="header-course">
                <span>React Course - Project 3</span>
            </div>
        </div>
    )
}