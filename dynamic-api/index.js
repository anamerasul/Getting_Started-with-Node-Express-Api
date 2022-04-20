const express = require('express');
const cors = require('cors');

const app = express();

const port = process.env.PORT || 5000;

app.use(cors())

app.get("/", (req, res) => {
    res.send("HELLO FROM dynamc")
});


const users = [
    { id: 1, name: "jasim", email: "jasim1@j.com" },
    { id: 2, name: "jasim3", email: "jasim2@j.com" },
    { id: 3, name: "jasim4", email: "jasim6@j.com" },
    { id: 4, name: "jasim5", email: "jasim5@j.com" }
]

app.get("/users", (req, res) => {
    res.send(users)

});

app.get("/user/:id", (req, res) => {

    console.log(req.params)
    const id = +(req.params.id)
    const user = users[id];
    res.send(user)

});

app.get("/fruits", (req, res) => {
    res.send(['mango', 'apple', 'orange'])

});

app.get("/fruits/mango/fazle", (req, res) => {
    res.send('saur asaur flavour')
});
app.listen(port, () => {
    console.log("Lisening to port", port)
})