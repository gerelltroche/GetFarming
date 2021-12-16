import { Item, PatchTypes } from "./interfaces/index.interface";


export function getOptimalSeed(farmingLevel: number, patchType: PatchTypes): Item | null {
    const optimalSeed: Item = {
        amount: 1,
        name: '',
        stackable: false,
        type: 'seed'
    };

    if (patchType === 'allotment') {
        optimalSeed.amount = 3;
        optimalSeed.stackable = true;
        optimalSeed.name = getOptimalAllotment(farmingLevel);
        return optimalSeed;
    }

    if (patchType === 'flower') {
        const optimalFlower = getOptimalFlower(farmingLevel);
        if (!optimalFlower) return null;
        optimalSeed.stackable = true;
        optimalSeed.name = optimalFlower;
        return optimalSeed;
    }

    if (patchType === 'herb') {
        const optimalHerb = getOptimalHerb(farmingLevel);
        if (!optimalHerb) return null;
        optimalSeed.stackable = true;
        optimalSeed.name = optimalHerb;
        return optimalSeed;
    }

    return optimalSeed;
}

function getOptimalAllotment(farmingLevel: number): string {
    if (farmingLevel >= 61) return 'Snape Grass';
    if (farmingLevel >= 47) return 'Watermelon';
    if (farmingLevel >= 31) return 'Strawberry';
    if (farmingLevel >= 20) return 'Sweetcorn';
    if (farmingLevel >= 12) return 'Tomato';
    if (farmingLevel >= 7) return 'Cabbage';
    if (farmingLevel >= 5) return 'Onion';
    return 'Potato';
}

function getOptimalFlower(farmingLevel: number): string | null {
    if (farmingLevel >= 58) return 'White lily';
    if (farmingLevel >= 26) return 'Limpwurt';
    if (farmingLevel >= 25) return 'Woad seed';
    if (farmingLevel >= 24) return 'Nasturtium';
    if (farmingLevel >= 11) return 'Rosemary';
    if (farmingLevel >= 2) return 'Marigold';
    return null;
}

function getOptimalHerb(farmingLevel: number): string | null {
    if (farmingLevel >= 85) return 'Torstol';
    if (farmingLevel >= 79) return 'Dwarf weed';
    if (farmingLevel >= 73) return 'Lantadyme';
    if (farmingLevel >= 67) return 'Cadantine';
    if (farmingLevel >= 62) return 'Snapdragon';
    if (farmingLevel >= 56) return 'Kwuarm';
    if (farmingLevel >= 50) return 'Avantoe';
    if (farmingLevel >= 44) return 'Irit Leaf';
    if (farmingLevel >= 38) return 'Toadflax';
    if (farmingLevel >= 32) return 'Rannar seed';
    if (farmingLevel >= 29) return 'Gout tuber';
    if (farmingLevel >= 26) return 'Harralander';
    if (farmingLevel >= 19) return 'Tarromin';
    if (farmingLevel >= 14) return 'Marrentill';
    if (farmingLevel >= 9) return 'Guam Leaf';
    return null;
}