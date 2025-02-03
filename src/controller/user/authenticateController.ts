import { Request, Response } from "express";
import AuthenticateUC from '../../core/user/useCases/authenticate';

class AuthenticateController {
  async handle(req: Request, res: Response) {
    const {email , password } = req.body;


    const result = await AuthenticateUC.execute({ email, password });
    res.status(result.status).json(result.body);
  }
}

export default new AuthenticateController();