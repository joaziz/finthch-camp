import {Db, MongoClient} from "mongodb";

const url = "mongodb://root:root@localhost:27017/";

export type  ConnectResponse = { mongoClient: MongoClient, db: Db };

export const ConnectToMongo = (): Promise<ConnectResponse> => {
    return new Promise((resolve, reject) => {
        MongoClient.connect(url, function (err, mongoClient: MongoClient | undefined) {
            if (err) return reject(err);
            if (mongoClient) return resolve({mongoClient, db: mongoClient.db("fintech")})
            return reject(new Error("cant connect to db"))
        });
    });
}