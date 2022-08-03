import { CustomError } from "./CustomError";

export class ShortName extends CustomError{
    constructor(){
        super("O nome deve ser maior ",400)
    }
}