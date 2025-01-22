import { Request, Response } from "express";

import RegisterUserUseCase from "../../core/user/useCases/registerUser";
type Params = {
  cpf: string;
  name: string;
  email: string | null;
}
class RegisterUserController {
  async handle(req: Request, res: Response) {
    const { cpf, name, email } = req.body as Params;

    // validar os campos cpf, name e email usando a lib zod

    const result = await RegisterUserUseCase.execute({ cpf, name, email });

    res.status(result.status).json({ error: result.message });
  }
}

export default new RegisterUserController();