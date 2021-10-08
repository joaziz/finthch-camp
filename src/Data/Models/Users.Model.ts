export class User {
    constructor(data: any) {
        for (let key in data) {
            // @ts-ignore
            this[key] = data[key]
        }
    }

}
