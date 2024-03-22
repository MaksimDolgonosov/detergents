const express = require('express');
let cors = require('cors');
const mysql = require('mysql');
const fs = require("fs");
const PORT = 3001;

const app = express();
app.use(cors());
// app.use(function (req, res) {
//     res.header("Access-Control-Allow-Origin", "*")
// })

// var corsOptions = {
//     origin: 'http://localhost:3000',
//     optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
// }


// var connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'detergents'
// });

// connection.connect(err => {
//     if (err) {
//         console.log(err);
//         return err;
//     } else {
//         console.log("Data is.......OK")
//     }
// });

app.listen(PORT, () => {
    console.log(`Server is starting on port:${PORT}`)
});

app.get("/users", (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    const data = fs.readFileSync("./index.json", { encoding: "utf-8" });
    const dataObj = JSON.parse(data);
    res.json(dataObj.users)

    // res.json({
    //     "users": [
    //         {
    //             "name": "Максим",
    //             "surname": "Долгоносов",
    //             "tel": "+375 44 516 40 07",
    //             "email": "max_air@bk.ru",
    //             "id": "x8m1HZZWYrd9eE9lqxY0e19EL4H2",
    //             "status": "admin",
    //             "basket": [],
    //             "history": [
    //                 {
    //                     "id": "2-45-34",
    //                     "order": [
    //                         "Средство для мытья посуды, 1шт"
    //                     ],
    //                     "date": "11.04.2023"
    //                 },
    //                 {
    //                     "id": "5-95-33",
    //                     "order": [
    //                         "Стиральный порошок Persil, 1шт.",
    //                         "Таблетки для посудомоечной машины, 1шт.",
    //                         "Кондиционер для белья ВЕРНЕЛЬ, 1шт."
    //                     ],
    //                     "date": "07.02.2024"
    //                 },
    //                 {
    //                     "id": "1-44-38",
    //                     "order": [
    //                         "Средство для мытья посуды, 1шт.",
    //                         "Кондиционер для белья ВЕРНЕЛЬ, 2шт."
    //                     ],
    //                     "date": "13.02.2024"
    //                 },
    //                 {
    //                     "id": "59-2-26",
    //                     "order": [
    //                         "Таблетки для посудомоечной машины, 1шт."
    //                     ],
    //                     "date": "13.02.2024"
    //                 }
    //             ]
    //         },
    //         {
    //             "name": "Петя",
    //             "surname": null,
    //             "tel": null,
    //             "email": "peter@mail.ch",
    //             "id": "kfc8ucSqWzcwVpoCV9BPvMEEdz33",
    //             "status": "customer",
    //             "basket": [],
    //             "history": []
    //         }
    //     ],
    // })
});





app.get("/categories", cors(), (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    const data = fs.readFileSync("./index.json", { encoding: "utf-8" });
    const dataObj = JSON.parse(data);
    console.log(req.method);
    res.json(dataObj.categories)
    // res.json(
    //     [
    //         {
    //             "id": 1,
    //             "name": "Средства для стирки",
    //             "subcategories": [
    //                 "Стиральные порошки",
    //                 "Кондиционеры для белья"
    //             ]
    //         },
    //         {
    //             "id": 2,
    //             "name": "Средства для мытья посуды",
    //             "subcategories": [
    //                 "Таблетки для мытья посуды",
    //                 "Гели для мытья посуды"
    //             ]
    //         }
    //     ]
    // )
});
app.get("/goods", cors(), (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    const data = fs.readFileSync("./index.json", { encoding: "utf-8" });
    const dataObj = JSON.parse(data);
    res.json(dataObj.goods)
    // res.json(
    //     [
    //         {
    //             "id": 1,
    //             "name": "Средства для стирки",
    //             "subcategories": [
    //                 "Стиральные порошки",
    //                 "Кондиционеры для белья"
    //             ]
    //         },
    //         {
    //             "id": 2,
    //             "name": "Средства для мытья посуды",
    //             "subcategories": [
    //                 "Таблетки для мытья посуды",
    //                 "Гели для мытья посуды"
    //             ]
    //         }
    //     ]
    // )
});

app.set()