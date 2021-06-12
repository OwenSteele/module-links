import React from "react";
import ModuleModel from "../../models/moduleModel";
import "./styles/Module.css";

const Module = (props:ModuleModel) => {
    
    const handleLinkClick = () => window.open(props.secondaryLinkUrl, "_blank");

    return (<div className="module-container module-link">
        	<a href={props.primaryLinkUrl} style={{backgroundColor: props.backgroundColor, backgroundImage: props.backgroundImageUrl }} target="_blank" rel="noopener noreferrer">
                <div className="module-image">
                    <img src={props.imageUrl} alt="module-title"/>
                </div>
                <div className="module-title">
                    {props.title}
                </div>
                <div className="module-bio">
                {props.bio} 
                </div>
                <div className="module-secondary-link">
                    <button onClick={handleLinkClick}>{props.secondaryLinkText}</button>
                </div>
            </a>
    </div>);
}

export default Module;