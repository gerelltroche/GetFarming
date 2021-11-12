import { User } from "./interfaces/User.interface";

interface Item {
    type: 'seed' | 'farmingTool' | 'teleport',
    name: string,
    stackable: boolean,
    amount: number
}

interface Inventory {
    full: boolean,
    items: Array<Item>
}

function optimalFarmingInventory(User: User): Inventory | any {
    const farmingLevel = User.skills.Farming?.level;

    if (!User) {
        return Error('Must provide a User');
    }
    if (!farmingLevel) {
        return Error('User must have a farming level');
    }

    const inventory: Inventory = {
        full: false,
        items: []
    };

    // getting kinda long, need to isolate more.

    const seed: Item = getOptimalSeed(farmingLevel);
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