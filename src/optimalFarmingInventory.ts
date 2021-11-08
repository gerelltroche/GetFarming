import { User } from "./interfaces/User.interface";

interface Item {
    name: string,
    type: 'seed' | 'farmingTool' | 'teleport'
}

interface Inventory {
    full: boolean,
    items: Array<Item>
}

function optimalFarmingInventory(User: User): Inventory | any {
    const farmingLevel = User.skills.Farming?.level

    if (!farmingLevel) {
        return Error('User must have a farming level');
    }

    const inventory: Inventory = {
        full: false,
        items: []
    }

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