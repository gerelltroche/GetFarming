import { getUser } from "./getUser";
import { optimalFarmingInventory } from "./optimalFarmingInventory";

(async function () {
    const user = await getUser('Br4v3')
    const returnedInv = optimalFarmingInventory(user, 'herb');
    console.log(returnedInv);
    return returnedInv;

})();