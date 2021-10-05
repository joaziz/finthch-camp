const express = require("express");
const {TransactionController} = require("./Controllers/transactions/Transactions.controller");
const app = express();
var bodyParser = require('body-parser')
const {setUser, auth, log} = require("./Controllers/MiddelWares");

app.use(bodyParser.json())
let root = express.Router();

root.get("/", function (req, res) {
    res.send("hi");
});


app.use("/", root)
app.use("/transactions", setUser, auth, log, TransactionController)
app.listen(3000);