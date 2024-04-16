const express = require('express');
let cors = require('cors');
const mysql = require('mysql');
const fs = require("fs");
let db = require("./index.json");
const path = require("path");

const PORT = 3001;

const app = express();
app.use(cors());
app.use(express.json())

// app.use(express.static(path.resolve(__dirname, "../build")));
app.use(express.static('public'))

//Настройка для локального сервера MAMP
// const conn = mysql.createConnection({
//     host: "localhost",
//     port: 3306,
//     user: "root",
//     database: "detergents",
//     password: "root"
// });

//Настройка для реального сервера hoster.by
const conn = mysql.createConnection({
    host: "localhost",
    user: "webmakss_e_market",
    database: "webmakss_detergents",
    password: "263832263832nM"
});

// conn.connect(err => {
//     if (err) {
//         console.log(err);
//         return err
//     } else {
//         console.log("Database--------OK")
//     }
// })




app.get("/api/images/:id", async (req, res) => {
    res.setHeader("Content-Type", "image/jpeg");
    fs.readFile(`./goods/${req.params.id}.jpg`, (err, image) => {
        res.end(image)
    })
});



app.get("/api/users", (req, res) => {

    res.json(db.users)

});

app.get("/api/users/:id", async (req, res) => {

    const user = await db.users.filter(u => u.id === req.params.id)
    res.json(user)

});



app.get("/api/categories", cors(), (req, res) => {

    // const data = fs.readFileSync("./index.json", { encoding: "utf-8" });
    // const dataObj = JSON.parse(data);
    res.json(db.categories)
});

app.get("/api/goods", cors(), (req, res) => {

    // let query = "SELECT * FROM goods";
    // conn.query(query, (err, result) => {
    //     res.json(result);
    // })

    res.json(db.goods);
});

app.patch("/api/users/:id", async (req, res) => {
    const updateUsers = await db.users.map(u => {
        if (u.id === req.params.id) {
            return { ...u, ...req.body }
        }
        return u;
    });
    db = { ...db, users: updateUsers }
    await fs.writeFileSync("./index.json", JSON.stringify(db), { encoding: "utf-8" });
    res.status(201).json(req.body);

});

app.post("/api/users/", async (req, res) => {
    db.users.push(req.body);
    await fs.writeFileSync("./index.json", JSON.stringify(db), { encoding: "utf-8" });
    res.status(201).json(req.body.basket);

});

// app.get('/', function (req, res) {
//     res.render('index', { version: process.version })
// })

// const server = app.listen()

app.listen(PORT, () => {
    console.log(`Server is starting on port:${PORT}`)
});
// app.listen();
//const server = app.listen()
// app.set()