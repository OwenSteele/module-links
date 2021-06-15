import React from "react";
import ModuleModel from "../../models/ModuleModel";
import "./styles/Module.css";

const Module = (props:ModuleModel): JSX.Element => {
    
    const handleLinkClick = () => window.open(props.secondaryLinkUrl, "_blank");
    const formattedLink = props.imageUrl.startsWith('/') ? `/images/${props.imageUrl}` : props.imageUrl;
    const formattedBackgroundLink = props.backgroundImageUrl.startsWith('/') ? `/images/${props.backgroundImageUrl}` : props.backgroundImageUrl;
    const hasSecondaryLink = props.secondaryLinkUrl !== '';
    const hasInsetImage = props.backgroundImageUrl !== '';

    return (<div className="module-container module-link" style={{color: props.textColor}}>
        	<a href={props.primaryLinkUrl} style={{backgroundColor: props.backgroundColor, backgroundImage: props.backgroundImageUrl }} target="_blank" rel="noopener noreferrer">
                <div className="module-image">
                    <img src={formattedLink} alt=""/>
                </div>
                <div className="module-inset-image">
                {hasInsetImage ?  <img src={formattedBackgroundLink} alt=""/> : null}
                </div>
                <div className="module-details">
                <div className="module-title">
                    {props.title}
                </div>
                <div className="module-bio">
                    {props.bio} 
                </div>               
                <div className="module-secondary-link"> 
                {hasSecondaryLink ? <button onClick={handleLinkClick}>{`\uD83D\uDD17 ${props.secondaryLinkText}`}</button> : null}
                </div>
                </div>
            </a>
    </div>);
}

export default Module;