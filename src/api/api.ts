import express from 'express';
import { optimalFarmingInventory } from "../optimalFarmingInventory";
import { getUser } from "../getUser";
import { PatchTypes } from "../interfaces/PatchTypes";

// an api that exposes optimalFarmingInventory.ts using express
function api() {
    const app = express();
    app.listen(3000, () => {
        console.log('Listening on port 3000');
    });

    app.get('/farming/:username/:patchType', async (req, res) => {
        if (!req.params.username && !req.params.patchType) {
            res.status(400).send('Missing username or patchType');
        }

        try {
            const user = await getUser(req.params.username);
            const patchType = req.params.patchType as PatchTypes;
            const inventory = optimalFarmingInventory(user, patchType);
            res.send(inventory);
        } catch (error) {
            res.send(error);
        }
    });
}

export { api };