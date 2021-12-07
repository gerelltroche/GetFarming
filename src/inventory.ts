import { Inventory, Item } from "./interfaces/index.interface";

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
    },

    removeItem(Item: Item): Inventory {
        if (!Item) {
            return this;
        }
        if (this.items.length === 0) {
            console.log(`Cannot remove ${Item} from inventory as it is empty`);
            return this;
        }

        const index = this.items.indexOf(Item);
        if (index > -1) {
            this.items.splice(index, 1);
        }

        if (this.items.length < 28) {
            this.full = false;
        }

        return this
    }
};

export { inventory };