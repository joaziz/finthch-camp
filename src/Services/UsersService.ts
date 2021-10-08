import {UsersRepository} from "../Data/Repositories/UsersRepository";
import {User} from "../Data/Models/Users.Model";
import {EncryptPassword} from "./EncryptPassword";
import {ObjectId} from "mongodb";

const usersRepo = new UsersRepository();


export class UsersService {

    findall(query: any) {
        console.log(query)
        let filter: any = {};

        if ("fn" in query)
            filter.first_name = query.fn;

        if ("age_less" in query)
            filter.age = {$lt: parseInt(query.age_less)};

        console.log(filter)
        return usersRepo.findAll(filter)

    }

    async createAndFind(param: { password: string; last_name: string; first_name: string; email: string, gender: string }) {
        let insertId = await this.createUser(param);
        return this.findOrFail(insertId);
    }

    private async createUser(param: { password: string; last_name: string; first_name: string; email: string, gender: string }) {
        param.password = this.encryptPass(param.password).encrypt();

        const user = new User(param)
        return usersRepo.insert(user)
    }

    private encryptPass(password: string) {
        return new EncryptPassword().setPlainPassword(password);
    }

    async findOrFail(insertId: ObjectId | undefined) {
        let user = await this.find(insertId);
        if (user)
            return user;
        throw  new Error("invalid or missing ID")
    }

    async find(insertId: ObjectId | undefined) {
        return usersRepo.findById((insertId as ObjectId).toString());
    }
}