var express = require('express')
let cors = require('cors');
let db = require("./index.json");

var app = express()

app.use(express.static('public'))

app.use(express.json())
app.use(cors());


 app.get("/api/categories", cors(), (req, res) => {

   res.status(201).json(db.categories)
 });

 app.get("/api/goods", cors(), (req, res) => {


   res.status(201).json(db.goods)
 });





app.get('/', function (req, res) {
  res.render('index', { version: process.version })
})

const server = app.listen()
