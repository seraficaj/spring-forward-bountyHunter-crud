const express = require('express');
const app = express();

const cors = require('cors');

// middleware set-up
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors());

// controller middleware
app.use('/bounties', require('./controllers/bounty'));


app.listen(8000, () => {
    console.log(`bounty hunters API running on PORT:8000`);
})