import {RouteInterface} from "../Core/Interfaces/Route.Interface";
import express, {IRouter} from "express";
import {UsersController} from "../Controllers/UsersController";

const usersController = new UsersController();

export class UsersRouter implements RouteInterface {
    getPath(): string {
        return "/users";
    }

    getRouter(): IRouter {
        const route = express.Router();

        route.get("/", usersController.ListAllUsers);
        route.post("/", usersController.CreateNewUser);

        return route;
    }
}
