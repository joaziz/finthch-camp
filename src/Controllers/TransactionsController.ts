import {Request, Response} from "express";


class Transaction {

    constructor(public id: number, public desc: string) {

    }
}

let transactions: Transaction[] = [];

/**
 *
 * @param req
 * @param res
 * @constructor
 */
export function AllTransaction(req: Request, res: Response) {
    res.json({transactions});
}

/**
 *
 * @param req
 * @param res
 * @constructor
 */
export function CreateTransaction(req: Request, res: Response) {
    let desc = req.body.desc;
    let newTransaction = new Transaction(transactions.length + 1, desc)
    transactions.push(newTransaction);

    res.send({transaction: newTransaction});
}

/**
 *
 * @param req
 * @param res
 * @constructor
 */
export function DeleteTransaction(req: Request, res: Response) {
    let id: number = parseInt(req.params.id);

    let transaction = transactions.filter(transaction => transaction.id == id)[0];

    let index = transactions.indexOf(transaction)

    transactions.splice(index, 1);

    res.send("hi transactions" + req.params.id);
}

/**
 *
 * @param req
 * @param res
 * @constructor
 */
export function EditTransaction(req: Request, res: Response) {
    let id: number = parseInt(req.params.id);
    let transaction = transactions.filter(transaction => transaction.id == id);

    transaction[0].desc = req.body.desc;

    res.send({transaction: transaction});
}

/**
 *
 * @param req
 * @param res
 * @constructor
 */
export function GetTransaction(req: Request, res: Response) {
    let id: number = parseInt(req.params.id);

    let transaction = transactions.filter(transaction => transaction.id == id);

    res.send({transaction: transaction});
}