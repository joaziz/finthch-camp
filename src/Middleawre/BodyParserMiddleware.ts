import bodyParser from 'body-parser'
import {AppMiddlewareInterface} from "../Core/Interfaces/AppMiddleware.Interface";

export class BodyParserMiddleware implements AppMiddlewareInterface {
    getMiddleware(): any {
        return bodyParser.json()
    }

}