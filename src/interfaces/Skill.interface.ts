export type SkillTypes =
    'Overall' | 'Attack' | 'Defense' | 'Strength' |
    'Hitpoints' | 'Ranged' | 'Prayer' | 'Magic' |
    'Cooking' | 'Woodcutting' | 'Fletching' | 'Fishing' |
    'Firemaking' | 'Crafting' | 'Smithing' | 'Mining' |
    'Herblore' | 'Agility' | 'Thieving' | 'Slayer' |
    'Farming' | 'Runecraft' | 'Hunter' | 'Construction'

export interface Skill {
    rank: number,
    level: number,
    xp: number
}

