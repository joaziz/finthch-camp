import {Request, Response} from "express";
import {TransactionService} from "../Services/TransactionService";


const transactionService = new TransactionService();


/**
 *
 * @param req
 * @param res
 * @constructor
 */
export async function AllTransaction(req: Request, res: Response) {
    res.json({transactions: await transactionService.all()});
}

/**
 *
 * @param req
 * @param res
 * @constructor
 */
export async function CreateTransaction(req: Request, res: Response) {
    try {

        let desc = req.body.desc;
        let transaction = await transactionService.create({desc})
        return res.send({transaction: transaction});
    } catch (e: any) {
        return res.status(404).send({message: e.message});
    }
}

/**
 *
 * @param req
 * @param res
 * @constructor
 */
export function DeleteTransaction(req: Request, res: Response) {
    let id: string = req.params.id;

    try {
        transactionService.deleteById(id);
        res.send({message: `transaction with id ${id} has deleted successfully`});
    } catch (e: any) {
        return res.status(404).send({message: e.message});
    }
}

/**
 *
 * @param req
 * @param res
 * @constructor
 */
export async function EditTransaction(req: Request, res: Response) {
    try {
        let id: string = req.params.id;
        await transactionService.findAndUpdate(id, req.body)
        res.send({message: "transaction updated"});
    } catch (e: any) {
        return res.status(404).send({message: e.message});
    }
}

/**
 *
 * @param req
 * @param res
 * @constructor
 */
export async function GetTransaction(req: Request, res: Response) {
    let id: string = req.params.id;

    try {
        let transaction = await transactionService.findByIdOrFail(id);

        return res.send({transaction: transaction});
    } catch (e: any) {
        return res.status(404).send({message: e.message});
    }
}