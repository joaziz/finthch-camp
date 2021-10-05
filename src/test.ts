import {Db, MongoClient} from 'mongodb';

const url = "mongodb://root:root@localhost:27017/";


// function createCollection(db: MongoClient, collectionName: string) {
//     return new Promise((resolve, reject) => {
//         db.db("fintech").createCollection(collectionName, function (err, res) {
//             if (err) return reject(err);
//             resolve(true);
//             db.close();
//         });
//     })
// }


const connect = (): Promise<{ mongoClient: MongoClient, db: Db }> => {
    return new Promise((resolve, reject) => {
        MongoClient.connect(url, function (err, mongoClient: MongoClient | undefined) {
            if (err) return reject(err);
            if (mongoClient) return resolve({mongoClient, db: mongoClient.db("fintech")})
            return reject(new Error("cant connect to db"))
        });
    });
}


function insert(collection: string, data: Object) {

    return new Promise((resolve, reject) => {
        connect().then((d) => {
            return d.db.collection(collection).insertOne(data, function (err, res) {
                if (err) return reject(err);
                resolve(res?.insertedId);
                d.mongoClient.close();
            });
        })
    });

}


insert("test20", {name: "ali"}).then(console.log)
// connect().then(db => createCollection(db, "collection-3").then(console.log))


