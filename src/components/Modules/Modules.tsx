import React from "react";
import Module from "./Module";
import "./styles/Modules.css";
import parser from "../../data/jsonParser";

const Modules: React.FC = () => {

    console.log("moduleData");
    const modules = parser.parseModuleJson();

    const modulesOutput: React.ReactFragment = modules.map(m => <Module key={m.position} {...m} />);

    return (<div className={`modules-wrapper mod-${modules.length}`}>
            {modulesOutput}
    </div>);
}

export default Modules;