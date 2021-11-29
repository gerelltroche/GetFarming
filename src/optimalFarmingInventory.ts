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
        items: [],
        addItem(Item: Item): Inventory {
            if (!Item) {
                return this;
            }
            if (this.full) {
                console.log(`Cannot add ${Item} to inventory as it is full`);
                return this;
            }

            this.items.push(Item);

            if (this.items.length >= 28) {
                this.full = true;
            }

            return this
        }
    };
    // I dont like that seed can be of type Item or null
    const seed: Item | null = getOptimalSeed(farmingLevel, 'allotment');
    const fertilizer: Item = getOptimalFertilizer(); // only returns regular fertilizer

    if (seed) {
        inventory.addItem(seed);
    }


    return inventory;
}

export { optimalFarmingInventory };