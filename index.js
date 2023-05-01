const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.json({ messege: "hello server running" })
});

const allChefs = require("./data/chefs.json")
app.get('/allchef', (req, res) => {
    res.json(allChefs)
});

const allfoods = require("./data/foods.json")
app.get('/allfoods', (req, res) => {
    res.json(allfoods)
});

app.listen(5000, () => {
    console.log("server is running on port 5000");
});