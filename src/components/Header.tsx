import React from "react";
import LayoutModel from "../models/LayoutModel";
import "./Header.css"
import ScrollArrow from "./navigation/ScrollArrow";

const Header = (props: LayoutModel): JSX.Element => {

    const hasImage = props.titleImageUrl !== '';

    return (
        <div className="header" 
        style={{ height: props.titleHeightCss, 
        backgroundColor: props.titleBackgroundColor,
        backgroundImage: `url('${props.titleBackgroundImageUrl}')`  }}>
            <div style={{backgroundColor: props.titleDivBackgroundColor, color: props.titleDivColor}}>
                {hasImage ? <img src={props.titleImageUrl} /> : ''}
                <h1>{props.titleText}</h1>
                <p>{props.titleBio}</p>
            </div>
        <div className="scroll-btn">
            <ScrollArrow target="#modules" color={props.scrollButtonColor} message="See links"/>
        </div>
        </div>
    );
}

export default Header