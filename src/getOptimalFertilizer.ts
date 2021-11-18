import { Item } from "./interfaces/Item.interface";

function getOptimalFertilizer(): Item {
    return {
        amount: 1,
        name: 'fertilizer',
        stackable: false,
        type: 'fertilizer'
    };
}

export { getOptimalFertilizer };