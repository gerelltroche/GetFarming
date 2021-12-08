import {User, Inventory, SkillTypes, PatchTypes} from "./interfaces/index.interface";
import { validateUser } from "./validateUser";
import { getOptimalSeed } from "./getOptimalSeed";
import { getOptimalFertilizer } from "./getOptimalFertilizer";
import { inventory } from "./inventory";
import {getTools} from "./getTools";

function countAmountOfPatches(farmingLevel: number, type: PatchTypes,  unlocks: any): number {
    const patchLookup = {
        'allotment': 3,
        'flower': 3,
        'herb': 3,
        'hops': 3,
        'bush': 3,
        'tree': 3,
        'fruit tree': 3,
        'spirit tree': 3,
        'special': 3
    };
    return patchLookup[type];
}

function optimalFarmingInventory(User: User): Inventory | any {
    const farmingLevel = User.skills.Farming?.level ?? 0;
    const userIsValid = validateUser(User, 'Farming' as keyof SkillTypes);
    const patchType = 'allotment';

    if (!userIsValid) {
        return Error('User is not valid');
    }

    const optimalSeed = getOptimalSeed(farmingLevel, patchType);
    if (!optimalSeed) {
        return Error('No optimal seed found');
    }

    const optimalFertilizer = getOptimalFertilizer(); // only returns regular fertilizer
    if (!optimalFertilizer) {
        return Error('No optimal fertilizer found');
    }

    const amountOfPatches = countAmountOfPatches(farmingLevel, 'allotment', 'blah');

    for (let i = 0; i < amountOfPatches; i++) {
        inventory.addItem(optimalSeed);
        inventory.addItem(optimalFertilizer);
    }

    const tools = getTools(patchType)
    for (const tool of tools) {
        inventory.addItem(tool);
    }

    return inventory;
}

export { optimalFarmingInventory };