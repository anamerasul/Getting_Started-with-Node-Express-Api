const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Hello auto from my smart node')
});

app.listen(port, () => {
    console.log('Listing to port', port)
})