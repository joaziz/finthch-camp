import {TransactionsRouter} from "./Routes/TransactionsRouter";
import {CustomServer} from "./Core/CustomServer";
import {BodyParserMiddleware} from "./Middleawre/BodyParserMiddleware";

/**
 * init server
 */
const app = new CustomServer();
/**
 *  user middleware
 */
app.middleware(new BodyParserMiddleware())
/**
 * init routes
 */
app.route(new TransactionsRouter())
/**
 * start application
 */
app.listen(3003)