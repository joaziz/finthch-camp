import {Db, MongoClient, ObjectId} from "mongodb";
import {ConnectToMongo} from "../../Core/Database/MongoConnection";


export abstract class BaseRepo<Model> {
    abstract readonly collectionName: string;

    findAll(filter: Object = {}) {
        return new Promise((resolve, reject) => {
            ConnectToMongo().then((d) => {
                return d.db.collection(this.collectionName).find(filter).toArray(function (err, result) {
                    if (err) return reject(err);
                    resolve(result);
                    d.mongoClient.close();
                });
            })
        });
    }

    insert(item: Model): Promise<ObjectId | undefined> {
        return new Promise((resolve, reject) => {
            ConnectToMongo().then((d) => {
                return d.db.collection(this.collectionName).insertOne(item, function (err, res) {
                    if (err) return reject(err);
                    resolve(res?.insertedId);
                    d.mongoClient.close();
                });
            })
        });
    }

    delete(id: string | number) {
        return new Promise((resolve, reject) => {
            let _id: ObjectId;
            try {
                _id = new ObjectId(id)
            } catch (e) {
                return reject(new Error("invalid id"));
            }
            ConnectToMongo().then((d) => {
                return d.db.collection(this.collectionName).deleteOne({_id}, function (err, res) {
                    if (err) return reject(err);
                    resolve(res);
                    d.mongoClient.close();
                });
            });
        })
    }


    update(id: string, item: Model) {
        return new Promise((resolve, reject) => {
            let _id: ObjectId;
            try {
                _id = new ObjectId(id)
            } catch (e) {
                return reject(new Error("invalid id"));
            }
            ConnectToMongo().then((d) => {
                return d.db.collection(this.collectionName).updateOne({_id}, {$set: item}, function (err, res) {
                    if (err) return reject(err);
                    resolve(res);
                    d.mongoClient.close();
                });
            });
        })
    }

    findById(id: string): Promise<Model> {
        return new Promise((resolve, reject) => {
            let _id: ObjectId;
            try {
                _id = new ObjectId(id)
            } catch (e) {
                return reject(new Error("invalid id"));
            }

            ConnectToMongo().then((d) => {
                return d.db.collection(this.collectionName).findOne({_id}, function (err, result) {
                    if (err) return reject(err);
                    resolve(result as Model);
                    d.mongoClient.close();
                })
            })
        });
    }
}
