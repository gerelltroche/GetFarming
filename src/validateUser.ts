import { User, SkillTypes } from "./interfaces/index.interface";

function validateUser(User: User, skill: 'any' | keyof SkillTypes = 'any'): boolean {
    if (!User) {
        return false
    }

    if (!User.name) {
        return false
    }

    if (skill !== 'any') {
        // check all skills
        return true
    } else {
        // check 1 skill
        return true
    }
}

export { validateUser };