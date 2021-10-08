import {TransactionRepository} from "../Data/Repositories/TransactionRepository";
import {Transaction} from "../Data/Models/Transaction.Model";

let transactionRepo = new TransactionRepository()

export class TransactionService {

    async create(data: { desc: string }) {
        let transaction = new Transaction(data.desc);
        let transactionId = (await transactionRepo.insert(transaction))?.toString() || "";
        return this.findByIdOrFail(transactionId);

    }

    all() {
        return transactionRepo.findAll();
    }

    findById(id: string) {
        return transactionRepo.findById(id)
    }

    async findByIdOrFail(id: string): Promise<Transaction> {
        let transaction = await this.findById(id);
        if (transaction)
            return transaction;

        throw new Error("missing or invalid Id")
    }

    async update(transaction: Transaction, data: { desc: string }) {
        let newTransaction = new Transaction(data.desc);
        return transactionRepo.update(transaction._id as string, newTransaction)

    }

    deleteById(id: string) {
        return transactionRepo.delete(id);
    }

    async findAndUpdate(id: string, body: any) {
        return this.update(await this.findByIdOrFail(id), body);
    }
}