const express = require("express");
const bodyParser = require('body-parser')
const {setUser, auth, log} = require("./Controllers/MiddelWares");
const {TransactionController} = require("./Controllers/transactions/Transactions.controller");


const app = express();


app.use(bodyParser.json())

let root = express.Router();



root.get("/", function (req, res) {
    res.send("hi");
});




app.use("/", root)
app.use("/transactions", setUser, auth, log, TransactionController)
app.listen(3000);