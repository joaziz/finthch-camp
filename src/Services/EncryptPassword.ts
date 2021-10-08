import {createHmac} from "crypto";

export class EncryptPassword {
    private plainPassword: string = "";

    setPlainPassword(password: string): this {
        this.plainPassword = password;
        return this;
    }

    encrypt():string {
        return createHmac("sha256", "sdohfjhsdofppioqweipqw89789713/1-23/")
            .update(this.plainPassword).digest("base64");

    }
}