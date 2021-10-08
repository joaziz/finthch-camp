import {BaseRepo} from "./BaseRepository";
import {Transaction} from "../Models/Transaction.Model";

export class TransactionRepository extends BaseRepo<Transaction> {
    readonly collectionName: string = "transactions";


}