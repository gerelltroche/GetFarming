import axios, {AxiosResponse} from "axios";
import {Skill, User} from './interfaces/User.interface';

const URL = 'http://services.runescape.com/m=hiscore_oldschool/index_lite.ws?player=';

async function getUser(username: string) {
    const SPLITRULE: RegExp = new RegExp('[,\n]');
    const response: AxiosResponse  = await axios.get(URL + username);
    const skillData: Array<number> = response.data.split(SPLITRULE);

    // axios.get() returns an AxiosResponse<any> object, where response.data is any.
    // axios.get<Todo[]>() returns an AxiosResponse<Todo[]> object, where response.data is Todo[].
    //     So you can type response as:
    //     const response: AxiosResponse<Todo[]> = await axios.get("blabla");

    const user: User = {
        name: username,
        skills: {
            Overall: undefined,
            Attack: undefined,
            Defense: undefined,
            Strength: undefined,
            Hitpoints: undefined,
            Ranged: undefined,
            Prayer: undefined,
            Magic: undefined,
            Cooking: undefined,
            Woodcutting: undefined,
            Fletching: undefined,
            Fishing: undefined,
            Firemaking: undefined,
            Crafting: undefined,
            Smithing: undefined,
            Mining: undefined,
            Herblore: undefined,
            Agility: undefined,
            Thieving: undefined,
            Slayer: undefined,
            Farming: undefined,
            Runecraft: undefined,
            Hunter: undefined,
            Construction: undefined
        }
    };

    let iterator = 0;
    for (const skill in user.skills) {
        const skillRank: number = skillData[iterator++];
        const skillLevel: number = skillData[iterator++];
        const skillXP: number = skillData[iterator++];
        user.skills[skill as keyof User['skills']] = {
            rank: skillRank,
            level: skillLevel,
            xp: skillXP
        }
    }
    return user
}

export { getUser };