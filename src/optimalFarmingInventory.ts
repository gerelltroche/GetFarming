import { User, Inventory, Item, SkillTypes } from "./interfaces/index.interface";
import { validateUser } from "./validateUser";
import { getOptimalSeed } from "./getOptimalSeed";
import { getOptimalFertilizer } from "./getOptimalFertilizer";
import { inventory } from "./inventory";

function optimalFarmingInventory(User: User): Inventory | any {
    const farmingLevel = User.skills.Farming?.level ?? 0;
    const userIsValid = validateUser(User, 'Farming' as keyof SkillTypes);

    if (!userIsValid) {
        return Error('User is not valid');
    }

    // I dont like that seed can be of type Item or null
    const seed: Item | null = getOptimalSeed(farmingLevel, 'allotment');
    const fertilizer: Item = getOptimalFertilizer(); // only returns regular fertilizer

    if (seed) {
        inventory.addItem(seed);
    }

    return inventory;
}

export { optimalFarmingInventory };