import { CustomError } from "../CustomError";

export class InvalidPassword extends CustomError{
    constructor(){
        super("Informe uma senha", 400)
    }
}