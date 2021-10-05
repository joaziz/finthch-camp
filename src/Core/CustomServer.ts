import {RouteInterface} from "./Interfaces/Route.Interface";
import express from "express";
import {AppMiddlewareInterface} from "./Interfaces/AppMiddleware.Interface";

export class CustomServer {
    private readonly _server = express();

    route(router: RouteInterface) {
        this._server.use(router.getPath(), router.getRouter());
    }

    listen(port: number) {
        this._server.listen(port);
    }

    middleware(middleware: AppMiddlewareInterface) {
        this._server.use(middleware.getMiddleware())
    }
}