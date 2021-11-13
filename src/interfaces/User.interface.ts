import { Skill } from './Skill.interface';

export interface User {
    name: string,
    skills: {
        Overall: Skill | undefined,
        Attack: Skill | undefined,
        Defense: Skill | undefined,
        Strength: Skill | undefined,
        Hitpoints: Skill | undefined,
        Ranged: Skill | undefined,
        Prayer: Skill | undefined,
        Magic: Skill | undefined,
        Cooking: Skill | undefined,
        Woodcutting: Skill | undefined,
        Fletching: Skill | undefined,
        Fishing: Skill | undefined,
        Firemaking: Skill | undefined,
        Crafting: Skill | undefined,
        Smithing: Skill | undefined,
        Mining: Skill | undefined,
        Herblore: Skill | undefined,
        Agility: Skill | undefined,
        Thieving: Skill | undefined,
        Slayer: Skill | undefined,
        Farming: Skill | undefined,
        Runecraft: Skill | undefined,
        Hunter: Skill | undefined,
        Construction: Skill | undefined
    }
}