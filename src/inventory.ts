import {Inventory, Item} from "./interfaces/index.interface";

const inventory: Inventory = {
    full: false,
    items: [],
    addItem(givenItem: Item): Inventory {
        const item = {...givenItem};
        if (!item) {
            return this;
        }
        if (this.full) {
            console.log(`Cannot add ${item} to inventory as it is full`);
            return this;
        }
        if (this.items.length === 0) {
            this.items.push(item);
            return this;
        }

        if (this.items.filter((existingItem) => existingItem.name === item.name) && item.stackable) {
            const existingItem = this.items.find(existingItem => existingItem.name === item.name);
            if (existingItem) {
                existingItem.amount += item.amount;
            }
            return this;
        }

        this.items.push(item);

        if (this.items.length >= 28) {
            this.full = true;
        }

        return this
    },
    removeItem(item: Item): Inventory {
        if (!item) {
            return this;
        }
        if (this.items.length === 0) {
            console.log(`Cannot remove ${item} from inventory as it is empty`);
            return this;
        }

        const index = this.items.indexOf(item);
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