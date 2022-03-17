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

    db.Bounty.findById(id)
        .then((foundBounty) => {
            if (!foundBounty) {
                return res.status(404).json({ message: "DB/Server Error!" });
            }
            res.json(foundBounty);
        })
        .catch((err) => {
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
router.put("/:id", async (req, res) => {
    try {
        // get id from request params
        const { id } = req.params;
        // make option to return updated obj
        const options = {
            new: true,
        };
        // find the bounty in the DB and update it
        const updatedBounty = await db.Bounty.findOneAndUpdate(
            { _id: id },
            req.body,
            options
        );
        console.log(updatedBounty);
        res.json({ updatedBounty });
    } catch (err) {
        // handle error
        console.log(err);
        res.status(503).json({ message: "DB/Server Error!" });
    }
});

// DELETE /bounties/:id (destroy)

router.delete("/:id", (req, res) => {
    // find doc and delete it
    db.Bounty.findByIdAndDelete(req.params.id)
        .then(() => {
            // send a status + message that the delete was successful
            res.status(204).json({ message: "bounty deleted" });
        })
        .catch((err) => {
            // handle any errors
            console.log("Error" + err);
            res.status(503).json({ message: "something went wrong" });
        });
});

module.exports = router;
