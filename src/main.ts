import {CustomServer} from "./Core/CustomServer";
import {UsersRouter} from "./Routes/UsersRouter";
import {TransactionsRouter} from "./Routes/TransactionsRouter";
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
app.route(new UsersRouter())
app.route(new TransactionsRouter())
/**
 * start application
 */
app.listen(3003)