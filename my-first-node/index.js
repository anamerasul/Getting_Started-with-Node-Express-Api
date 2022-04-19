const express = require('express');

const app = express();

const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('My first node application')
})

app.listen(port, () => {
    console.log("first node on port ", port)
})