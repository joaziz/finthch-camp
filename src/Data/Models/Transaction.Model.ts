export class Transaction {
    _id?: string
    description: string

    constructor(description: string) {
        this.description = description;
    }
}