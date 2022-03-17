const express = require('express');
const app = express();

// middleware set-up
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.listen(8000, () => {
    console.log(`bounty hunters API running on PORT:8000`);
})