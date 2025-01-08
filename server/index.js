const express = require('express');
let cors = require('cors');
const mysql = require('mysql');
const syncMysql = require('sync-mysql');
const fs = require("fs");
let db = require("./index.json");
const path = require("path");
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');



let transporter = nodemailer.createTransport({
    host: 'smtp.mail.ru',
    port: 465,
    secure: true,
    auth: {
        user: "dolgonosov_90@mail.ru",
        pass: 'KpGrWcXiaDBkhdhdz4Vy'
    },
});

const PORT = 3001;

const app = express();
app.use(cors());
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use(express.static(path.resolve(__dirname, "../build")));
//app.use(express.static('public'))

//Настройка для локального сервера MAMP

// const settingsMysql = {
//     host: "localhost",
//     port: 3306,
//     user: "root",
//     database: "detergents",
//     password: "root"
// }

//Настройка для реального сервера hoster.by

const settingsMysql = {
    host: "localhost",
    user: "createmaxs_detergents",
    database: "createmaxs_detergents",
    password: "263832263832nM"
}

const conn = mysql.createConnection(settingsMysql);
const syncConn = new syncMysql(settingsMysql);



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
    const users = syncConn.query(`SELECT * FROM users`);
    // console.log(users);
    res.json(users)
    // res.json(db.users)

});

app.get("/api/users/:id", async (req, res) => {

    //const user = await db.users.filter(u => u.id === req.params.id);

    const userM = syncConn.query(`SELECT * FROM users where id = '${req.params.id}'`);
    const basketM = syncConn.query(`SELECT * FROM basket where id_user = '${req.params.id}'`);
    const historyM = syncConn.query(`SELECT * FROM history where id_user = '${req.params.id}'`);
    userM[0].basket = [...basketM];
    userM[0].history = [...historyM];
    //console.log(userM[0]);
    res.json(userM[0])
    // res.json(user)

});



app.get("/api/categories", async (req, res) => {

    const cat = syncConn.query("SELECT * FROM categories");
    const subCat = syncConn.query("SELECT * FROM subcategories");

    const result = cat.map(item => {
        item.subcategories = [];
        subCat.forEach(element => {
            if (element.id_category === item.id) {
                item.subcategories.push(element.subcategory)
            }
        });
        return item;
    })

    res.json(result)
    //res.json(db.categories)
});

app.get("/api/goods", cors(), (req, res) => {

    let query = "SELECT * FROM goods";
    conn.query(query, (err, result) => {
        res.json(result);
    })

    //res.json(db.goods);
});
app.get("/api/getHistory/:id", async (req, res) => {
    const result = syncConn.query(`SELECT * FROM history where id_user = '${req.params.id}'`);
    //const result = syncConn.query(`SELECT orderData FROM history WHERE id_user='${req.params.id}'`);
    // console.log(result)
    res.status(200).json(result);
});

app.post("/api/addHistory/:id", async (req, res) => {
    const query = `INSERT INTO history (id, id_user, orderData, date) VALUES ?`;
    const values = [
        [req.body.id, req.params.id, req.body.orderData, req.body.date]
    ]
    conn.query(query, [values], (err, result) => {
        if (err) throw err;
        // console.log(result)
    })

    res.status(200).json(req.body);
    // res.status(200).json(result);
});

app.patch("/api/usersData/:id", async (req, res) => {
    const { name, surname, tel } = req.body;
    syncConn.query(`UPDATE users SET name='${name}', surname='${surname}', tel='${tel}' WHERE id='${req.params.id}'`);
    res.status(201).json(req.body);
});

// app.patch("/api/users/:id", async (req, res) => {
//     const updateUsers = await db.users.map(u => {
//         if (u.id === req.params.id) {
//             return { ...u, ...req.body }
//         }
//         return u;
//     });
//     db = { ...db, users: updateUsers }
//     await fs.writeFileSync("./index.json", JSON.stringify(db), { encoding: "utf-8" });
//     res.status(201).json(req.body);
// });

// app.get("/api/basket/:id", (req, res) => {
//     console.log(req.params.id)
//     const query = syncConn.query(`SELECT * FROM basket where id_user = '${req.params.id}'`);
//     //let query = `SELECT * FROM basket where id_user = ${req.params.id}`;
//     conn.query(query, (err, result) => {
//         console.log(result)
//         res.json(result);
//     })

//     //res.json(db.goods);
// });

// app.get("/api/basket/:id", async (req, res) => {
//     console.log("server req");
//     //const user = await db.users.filter(u => u.id === req.params.id);
//     const basketM = syncConn.query(`SELECT * FROM basket where id_user = '${req.params.id}'`);
//     console.log(basketM);
//     res.json(basketM)
//     // res.json(user)

// });

app.get("/api/basket/getFullBasket/:userId", async (req, res) => {
    //console.log("server req");
    //const user = await db.users.filter(u => u.id === req.params.id);
    const basketM = syncConn.query(`SELECT * FROM basket where id_user = '${req.params.userId}'`);
    //console.log(basketM);
    res.json(basketM)
    // res.json(user)

});

app.patch("/api/basket/basketQuantity/:id", async (req, res) => {
    const { quantity, itemId } = req.body;
    //console.log(req.body);
    syncConn.query(`UPDATE basket SET quantity=${quantity} WHERE id='${itemId}'AND id_user='${req.params.id}'`);
    // console.log(item);
    res.status(201).json(req.body);
});

app.patch("/api/basket/addBasket/:id", async (req, res) => {
    // const { item } = req.body;
    // const { quantity, itemId } = req.body;
    //console.log(req.body);

    // const query = syncConn.query(`INSERT INTO basket(id, id_user, title, price, quantity, image) VALUES ('[${req.body.id}]', '[${req.params.id}]','[${req.body.title}]',[${req.body.price}],'${req.body.quantity}','[${req.body.image}]')`);
    const query = `INSERT INTO basket(id, id_user, title, price, quantity, image) VALUES ?`;

    const values = [
        [req.body.id, req.params.id, req.body.title, req.body.price, req.body.quantity, req.body.image]
    ]
    conn.query(query, [values], (err, result) => {
        if (err) throw err;
        // console.log(result)
    })

    res.status(201).json(req.body);
});
app.delete("/api/basket/removeFromBasket/:id", async (req, res) => {
    const { itemId } = req.body;
    syncConn.query(`DELETE FROM basket WHERE id='${itemId}'AND id_user='${req.params.id}'`);
    res.status(201).json(req.body);
});
app.delete("/api/basket/clearBasket/:id", async (req, res) => {
    syncConn.query(`DELETE FROM basket WHERE id_user='${req.params.id}'`);
    res.status(201).json(req.body);
});


app.post("/api/sendEmail", async (req, res) => {
    console.log("request------OK")

    const body = await req.body;
    //Отключена отправка писем


    if (body.delivery) {
        transporter.sendMail({
            from: '"Бытовая химия" <dolgonosov_90@mail.ru>',
            to: `max_air@bk.ru, ${body.email}`,
            subject: 'Новый заказ',
            text: `Ваш заказ оформлен, для ${body.orderName} ${body.orderSurname}, тел: ${body.orderTel}, в отделение Европочты №${body.orderPostNumber} на сумму ${body.totalPrice}руб. + 9руб. за доставку, товары: ${body.basketList}`,
        });
    } else {
        transporter.sendMail({
            from: '"Бытовая химия" <dolgonosov_90@mail.ru>',
            to: `max_air@bk.ru, ${body.email}`,
            subject: 'Новый заказ',
            text: `Ваш заказ оформлен, для ${body.orderName}, тел: ${body.orderTel}, по адресу: ${body.orderAddress} на сумму ${body.totalPrice}руб., товары: ${body.basketList}`,
        });
        // console.log(result)
    }

    res.status(201).json(req.body);
})

// app.post("/api/users/", async (req, res) => {
//     console.log(req.body);
//     await fs.writeFileSync("./index.json", JSON.stringify(db), { encoding: "utf-8" });
//     res.status(201).json(req.body.basket);

// });

app.post("/api/users/", async (req, res) => {
    // const queryStr = `INSERT INTO 'users'('id', 'name', 'surname', 'tel', 'email', 'status') VALUES ('[${req.body.id}]','[${req.body.name}]','[${req.body.surname}]','[${req.body.tel}]','[${req.body.email}]','[${req.body.status}]')`;
    let query = "INSERT INTO users(id, name, surname, tel, email, status) VALUES ?";
    const values = [
        [req.body.id, req.body.name, req.body.surname, req.body.tel, req.body.email, req.body.status]
    ]
    conn.query(query, [values], (err, result) => {
        if (err) throw err;
        // console.log(result)
    })

    // syncConn.query(queryStr);

    res.status(201).json(req.body);
})


app.get('/', function (req, res) {
    res.render('index', { version: process.version })
})

app.listen()


// app.listen(PORT, () => {
//     console.log(`Server is starting on port:${PORT}`)
// });


// app.listen();
//const server = app.listen()
// app.set()






