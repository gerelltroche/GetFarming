import {User, Inventory, Item, SkillTypes} from "./interfaces/index.interface";
import { validateUser } from "./validateUser";
import { getOptimalSeed } from "./getOptimalSeed";

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

    // getting kinda long, need to isolate more.

    const seed: Item = getOptimalSeed(farmingLevel, 'allotment');
    const fertilizer: Item = getOptimalFertilizer(User);

    // add these to inventory

    const tools: Array

    function addItemToInventory(Item: Item) {
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