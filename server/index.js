const express = require('express');
let cors = require('cors');
const mysql = require('mysql');
const fs = require("fs");
const db = require("./index.json");

console.log(db.users)
const PORT = 3001;

const app = express();
app.use(cors());
app.use(express.json())

app.get("/api/users", (req, res) => {

    // const data = fs.readFileSync("./index.json", { encoding: "utf-8" });
    // const dataObj = JSON.parse(data);
    res.json(db.users)

});

app.get("/api/users/:id", async (req, res) => {
    // console.log(req.params.id)
    // const data = await fs.readFileSync("./index.json", { encoding: "utf-8" });
    // const dataObj = await JSON.parse(data);
    // const users = await dataObj.users;
    const user = await db.users.filter(u => u.id === req.params.id)
    res.json(user)

});



app.get("/api/categories", cors(), (req, res) => {

    // const data = fs.readFileSync("./index.json", { encoding: "utf-8" });
    // const dataObj = JSON.parse(data);
    res.json(db.categories)
});

app.get("/api/goods", cors(), (req, res) => {

    // const data = fs.readFileSync("./index.json", { encoding: "utf-8" });
    // const dataObj = JSON.parse(data);
    res.json(db.goods)
});

app.patch("/api/users/:id", async (req, res) => {
    // console.log(req.body)
    // console.log(req.params.id)
    const data = await fs.readFileSync("./index.json", { encoding: "utf-8" });
    const dataObj = await JSON.parse(data);
    const users = await dataObj.users;
    const user = await users.filter(u => u.id === req.params.id);
    user[0].basket = req.body.basket;

    console.log(user[0])
    // res.json(user)

});


app.listen(PORT, () => {
    console.log(`Server is starting on port:${PORT}`)
});
app.set()