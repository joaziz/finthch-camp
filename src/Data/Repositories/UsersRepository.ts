import {BaseRepo} from "./BaseRepository";
import {User} from "../Models/Users.Model";

export class UsersRepository extends BaseRepo<User> {
    readonly collectionName: string = "users";

}
