import {Request, Response} from "express";
import {UsersService} from "../Services/UsersService";

const usersService = new UsersService();

export class UsersController {

    async ListAllUsers(req: Request, res: Response) {
        return res.json({data: await usersService.findall(req.query)})
    }

    async CreateNewUser(req: Request, res: Response) {
        let {first_name, last_name, password, email} = req.body;
        if (!first_name || !last_name || !password || !email)
            return res.status(400).json({message: "invalid data"});
        try {

            const user = await usersService.createAndFind(req.body);
            return res.json({user});
        } catch (e: any) {
            return res.status(400).json({message: e.message});
        }
    }
}