const db = require('../models');
const router = require("express").Router();

// define routes here

// GET /bounties (index)

// GET /bounties/:id

// POST /bounties (insert a new bounty)
router.post('/', async (req,res) => {
    try {
        const createdBounty = await db.Bounty.create(req.body);
        res.status(201).json(createdBounty);
    } catch (err) {
        if (err.name === 'ValidationError'){
            res.status(406).json({message: 'Validation Error!'});
        } else {
            res.status(503).json({message: 'DB/Server Error!'})
        }
    }
});

// PUT /bounties/:id (update)

// DELETE /bounties/:id (destroy)

router.get('/', (req,res) => {
    res.json({message: 'hello from bounty controller'})
});

module.exports = router;
