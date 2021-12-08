import { PatchTypes } from "./interfaces/PatchTypes";
import { Item } from "./interfaces/Item.interface";

function getTools(patchType: PatchTypes): Array<Item> {
    const toolsLookup = {
        'allotment': (): Array<Item> => {
            return [
                {type: "farmingTool", name: 'rake', stackable: false, amount: 1},
                {type: "farmingTool", name: 'seedDibber', stackable: false, amount: 1},
                {type: "farmingTool", name: 'spade', stackable: false, amount: 1},
            ]
        },
        'flower': (): Array<Item> => {
            return [
                {type: "farmingTool", name: 'rake', stackable: false, amount: 1},
                {type: "farmingTool", name: 'seedDibber', stackable: false, amount: 1},
                {type: "farmingTool", name: 'spade', stackable: false, amount: 1},
            ]
        },
        'herb': (): Array<Item> => {
            return [
                {type: "farmingTool", name: 'rake', stackable: false, amount: 1},
                {type: "farmingTool", name: 'seedDibber', stackable: false, amount: 1},
                {type: "farmingTool", name: 'spade', stackable: false, amount: 1},
            ]
        },
        'hops': (): Array<Item> => {
            return [
                {type: "farmingTool", name: 'rake', stackable: false, amount: 1},
                {type: "farmingTool", name: 'seedDibber', stackable: false, amount: 1},
                {type: "farmingTool", name: 'spade', stackable: false, amount: 1},
            ]
        },
        'bush': (): Array<Item> => {
            return [
                {type: "farmingTool", name: 'rake', stackable: false, amount: 1},
                {type: "farmingTool", name: 'seedDibber', stackable: false, amount: 1},
                {type: "farmingTool", name: 'spade', stackable: false, amount: 1},
            ]
        },
        'tree': (): Array<Item> => {
            return [
                {type: "farmingTool", name: 'rake', stackable: false, amount: 1},
                {type: "farmingTool", name: 'seedDibber', stackable: false, amount: 1},
                {type: "farmingTool", name: 'spade', stackable: false, amount: 1},
            ]
        },
        'fruit tree': (): Array<Item> => {
            return [
                {type: "farmingTool", name: 'rake', stackable: false, amount: 1},
                {type: "farmingTool", name: 'seedDibber', stackable: false, amount: 1},
                {type: "farmingTool", name: 'spade', stackable: false, amount: 1},
            ]
        },
        'spirit tree': (): Array<Item> => {
            return [
                {type: "farmingTool", name: 'rake', stackable: false, amount: 1},
                {type: "farmingTool", name: 'seedDibber', stackable: false, amount: 1},
                {type: "farmingTool", name: 'spade', stackable: false, amount: 1},
            ]
        },
        'special': (): Array<Item> => {
            return [
                {type: "farmingTool", name: 'rake', stackable: false, amount: 1},
                {type: "farmingTool", name: 'seedDibber', stackable: false, amount: 1},
                {type: "farmingTool", name: 'spade', stackable: false, amount: 1},
            ]
        },
    }
    return toolsLookup[patchType]();
}

export { getTools };