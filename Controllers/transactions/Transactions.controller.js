const express = require("express")
const {setUser, auth, log} = require("../MiddelWares");

const TransactionController = express.Router();

let transactions = [];


TransactionController.get(
    "/", function (req, res) {
        res.json({transactions});
    }
)
;

TransactionController.post("", function (req, res) {

    let newTrandaction = req.body;

    newTrandaction.id = transactions.length + 1;
    transactions.push(newTrandaction);

    res.send({transaction: newTrandaction});
});
TransactionController.get("/:id", function (req, res) {
    let id = req.params.id;

    let transaction = transactions.filter(transaction => transaction.id == id);


    res.send({transaction: transaction});
});

TransactionController.put("/:id", function (req, res) {
    let id = req.params.id;
    let transaction = transactions.filter(transaction => transaction.id == id);

    transaction[0].desc = req.body.desc;

    res.send({transaction: transaction});


});

TransactionController.delete("/:id", function (req, res) {
    let id = req.params.id;

    let transaction = transactions.filter(transaction => transaction.id == id)[0];

    let index = transactions.indexOf(transaction)

    transactions.splice(index, 1);

    res.send("hi transactions" + req.params.id);
});


module.exports = {TransactionController}