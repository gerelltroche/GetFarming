export interface Item {
    type: 'seed' | 'farmingTool' | 'teleport',
    name: string,
    stackable: boolean,
    amount: number
}