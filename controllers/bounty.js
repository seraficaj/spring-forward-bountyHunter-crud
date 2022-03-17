const db = require("../models");
const router = require("express").Router();

// define routes here

// GET /bounties (index)
router.get("/", async (req, res) => {
    try {
        // find all bounties
        const bounties = await db.Bounty.find({});
        // respond with all the bounties
        res.json(bounties);
        // if there is an error, we will send an error status w/ message
    } catch (err) {
        console.log("Error!", err);
        res.status(503).json({ message: "DB/Server Error!" });
    }
});

// GET /bounties/:id
router.get("/:id", (req, res) => {
    const { id } = req.params;

    db.Bounty.findById(id).then((foundBounty) => {
        if (!foundBounty) {
            return res.status(404).json({ message: "DB/Server Error!" });
        }
        res.json(foundBounty);
    }).catch(err => {
        res.status(503).json({ message: "DB/Server Error!" });
    });
});

// POST /bounties (insert a new bounty)
router.post("/", async (req, res) => {
    try {
        const createdBounty = await db.Bounty.create(req.body);
        res.status(201).json(createdBounty);
    } catch (err) {
        if (err.name === "ValidationError") {
            res.status(406).json({ message: "Validation Error!" });
        } else {
            res.status(503).json({ message: "DB/Server Error!" });
        }
    }
});

// PUT /bounties/:id (update)

// DELETE /bounties/:id (destroy)

router.get("/", (req, res) => {
    res.json({ message: "hello from bounty controller" });
});

module.exports = router;
