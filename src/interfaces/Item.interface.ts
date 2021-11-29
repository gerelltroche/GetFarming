export interface Item {
    type: 'seed' | 'farmingTool' | 'teleport' | 'fertilizer';
    name: string;
    stackable: boolean;
    amount: number;
}