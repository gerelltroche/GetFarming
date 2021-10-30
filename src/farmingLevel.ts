import axios from 'axios';
const BASEURL = 'https://secure.runescape.com/m=hiscore_oldschool/index_lite.ws?player=';

async function farmingLevel(username: string): Promise<number> {
    const response = await axios.get(BASEURL+username);
    return response.data.split(',')[41];
}

export default farmingLevel