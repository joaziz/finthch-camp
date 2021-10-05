import {Db, MongoClient} from "mongodb";

const url = "mongodb://root:root@localhost:27017/";


class Transaction {
    _id?: string
    description: string

    constructor(description: string) {
        this.description = description;
    }
}

class User {
    _id?: string
    name: string

    constructor(name: string) {
        this.name = name;
    }
}

const connect = (): Promise<{ mongoClient: MongoClient, db: Db }> => {
    return new Promise((resolve, reject) => {
        MongoClient.connect(url, function (err, mongoClient: MongoClient | undefined) {
            if (err) return reject(err);
            if (mongoClient) return resolve({mongoClient, db: mongoClient.db("fintech")})
            return reject(new Error("cant connect to db"))
        });
    });
}

export abstract class BaseRepo<Model> {
    abstract readonly collectionName: string;

    findAll(filter: Object = {}) {
        //implementation here
    }

    insert(item: Model) {
        return new Promise((resolve, reject) => {
            connect().then((d) => {
                return d.db.collection(this.collectionName).insertOne(item, function (err, res) {
                    if (err) return reject(err);
                    resolve(res?.insertedId);
                    d.mongoClient.close();
                });
            })
        });
    }

    delete(id: string | number) {

        //implementation here
    }


    update(id: string, item: Model) {
        //implementation here
    }

}

export class TransactionRepository extends BaseRepo<Transaction> {
    readonly collectionName: string = "transactions";

}

export class UsersRepository extends BaseRepo<User> {
    readonly collectionName: string = "users";

}

let t = new TransactionRepository();

t.insert(new Transaction("s"))

let u = new UsersRepository();

u.insert(new User("f"))
