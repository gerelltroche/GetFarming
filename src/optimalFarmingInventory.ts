import { User, Inventory, Item, SkillTypes } from "./interfaces/index.interface";
import { validateUser } from "./validateUser";
import { getOptimalSeed } from "./getOptimalSeed";
import { getOptimalFertilizer } from "./getOptimalFertilizer";

function optimalFarmingInventory(User: User): Inventory | any {
    const farmingLevel = User.skills.Farming?.level ?? 0;
    const [userIsValid, userErrorMsg] = validateUser(User, 'Farming' as keyof SkillTypes);

    if (userErrorMsg) {
        return Error(userErrorMsg);
    }

    const inventory: Inventory = {
        full: false,
        items: []
    };
    // I dont like that seed can be of type Item or null
    const seed: Item | null = getOptimalSeed(farmingLevel, 'allotment');
    const fertilizer: Item = getOptimalFertilizer(); // only returns regular fertilizer

    addItemToInventory(seed);
    addItemToInventory(fertilizer);

    function addItemToInventory(Item: Item | null) {
        if (!Item) return;
        if (inventory.full) {
            console.log(`Cannot add ${Item} to inventory as it is full`);
            return;
        }

        inventory.items.push(Item);

        if (inventory.items.length >= 28) {
            inventory.full = true;
        }
    }

    return inventory;
}

export { optimalFarmingInventory };