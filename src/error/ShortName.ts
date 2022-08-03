import { CustomError } from "./CustomError";

export class ShortName extends CustomError{
    constructor(){
        super("O nome deve ser maior que 10 caracteres",400)
    }
}