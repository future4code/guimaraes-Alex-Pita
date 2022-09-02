import { app } from "./controller/app"
import { Request, Response} from 'express'
export interface Character {
  name: string;
  life: number;
  strength: number;
  defense: number;
}

app.get("/test", (req: Request, res: Response) => {
    res.status(200).send("Servidor em pé! 👣");
  });
export const validateCharacter = (input: Character): boolean => {
  if (
    !input.name ||
		input.life === undefined || 
    input.strength === undefined ||
    input.defense === undefined
  ) {
    return false;
  }

  if (input.life <=0 || input.strength <=0 || input.defense <=0) {
    return false;
  }

  return true;
}