
import ModuleModel from '../models/moduleModel';
import moduleData from "./modules/moduleData.json";

const parser = {

    parseModuleJson: (): ModuleModel[] => {

        console.log(moduleData);

        const data: ModuleModel[] = moduleData;

        return data;
    }
};

export default parser;