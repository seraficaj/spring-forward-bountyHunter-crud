const express = require('express');
const app = express();

// middleware set-up
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// controller middleware
app.use('/bounties', require('./controllers/bounty'));


app.listen(8000, () => {
    console.log(`bounty hunters API running on PORT:8000`);
})