import React from "react";
import "./Main.css"
import Modules from "./Modules/Modules";
import Header from "./Header";
import parser from "../data/jsonParser";
import LayoutModel from "../models/LayoutModel";

const Main = (): JSX.Element => {

    const styling: LayoutModel = parser.parseLayoutJson();

    return (
        <div className="main-wrapper" style={{fontFamily: styling.websiteFont}}>
            <div className="home-wrapper">
                <Header {...styling}/>
                <div></div>
                <Modules /*scrollButtonColor={styling.scrollButtonColor}*//>
            </div>
            <div className="extras-wrapper">
                <span>Built with <a href="https://github.com/OwenSteele/module-links">module-links</a> - Owen Steele</span>
            </div>
        </div>
    );
}

export default Main;