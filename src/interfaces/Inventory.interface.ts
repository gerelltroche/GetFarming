import { Item } from './Item.interface'

export interface Inventory {
    full: boolean,
    items: Array<Item>
}