import LayoutModel from '../models/LayoutModel';
import ModuleModel from '../models/ModuleModel';
import moduleData from "./modules/moduleData.json";
import layoutData from "./theme/layoutData.json";

const parser = {

    parseModuleJson: (): ModuleModel[] => {

        const data: ModuleModel[] = moduleData;

        return data;
    },

    parseLayoutJson: (): LayoutModel => {

        const data: LayoutModel = layoutData;

        return data;
    }
};

export default parser;