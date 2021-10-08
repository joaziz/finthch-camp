import {RouteInterface} from "../Core/Interfaces/Route.Interface";
import express, {IRouter} from "express";
import {
    AllTransaction,
    CreateTransaction, DeleteTransaction,
    EditTransaction,
    GetTransaction
} from "../Controllers/TransactionsController";


export class TransactionsRouter implements RouteInterface {
    getPath(): string {
        return "/transactions";
    }

    getRouter(): IRouter {

        const route = express.Router();

        route.get("/", AllTransaction);
        route.post("/", CreateTransaction);
        route.get("/:id", GetTransaction);
        route.put("/:id", EditTransaction);
        route.delete("/:id", DeleteTransaction);

        return route;
    }

}