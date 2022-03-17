const db = require('../models');
const router = require("express").Router();

// define routes here
router.get('/', (req,res) => {
    res.json({message: 'hello from bounty controller'})
});

module.exports = router;
