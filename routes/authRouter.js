const { Router } = require("express");

var authRouter = Router()

authRouter.get('/list', async (req, res) => {
    const queryRes = await db.client.query('select * from users;');
    res.json(queryRes.rows);
});

module.exports = authRouter;