import { User, SkillTypes } from "./interfaces/index.interface";

export function validateUser(User: User, skill: 'any' | keyof SkillTypes = 'any'): [boolean, string | null] {
    if (!User) {
        return [false, 'User must be provided.'];
    }

    if (!User.name) {
        return [false, 'User provided has no name']
    }

    if (skill !== 'any') {
        // check all skills
        return [true, null]
    } else {
        // check 1 skill
        return [true, null]
    }
}