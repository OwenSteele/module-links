import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll"
import ScrollArrowModel from "../../models/navigation/ScrollArrowModel";
import "./ScrollArrow.css"

const ScrollArrow =({target, color, message ='', down = true}:ScrollArrowModel): JSX.Element => {

    return (
        <div className="scroll-btn">
            <div className="scroll-btn-message">{message}</div>
            <AnchorLink href={target} style={{color: color}} className="arrow-link">
            {down ? '\u25BC' : '\u25B2'}           
            </AnchorLink>
        </div>);
};

export default ScrollArrow;