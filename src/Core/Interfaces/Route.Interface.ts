import {Application} from "express";
import {IRouter} from "express";

export interface RouteInterface {
    getRouter(): IRouter;

    getPath(): string;
}