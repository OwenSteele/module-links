import React from "react";
import Module from "./Module";
import "./styles/Modules.css";
import parser from "../../data/jsonParser";
//import ScrollArrow from "../navigation/ScrollArrow";

const Modules = (/*{scrollButtonColor}: {scrollButtonColor: string}*/): JSX.Element=> {

    const modules = parser.parseModuleJson();
    const modulesOutput: React.ReactFragment = modules.map(m => <Module key={m.position} {...m} />);

    return (<div id="modules">
        <h2>My Links</h2>
    <div className={`modules-wrapper mod-${modules.length}`}>
            {modulesOutput}
    </div>
    {/*<ScrollArrow target="#extras" color={scrollButtonColor}/>*/}
    </div>);
}

export default Modules;