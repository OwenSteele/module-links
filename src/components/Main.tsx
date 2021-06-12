import React from "react";
import "./Main.css"
import Modules from "./Modules/Modules";
import Header from "./Header";

const Main: React.FC = () => {
    return (
        <div className="main-wrapper">
            <div className="home-wrapper">
                <Header />
                <Modules />
            </div>
            <div className="extras-wrapper">

            </div>
        </div>
    );
}

export default Main;