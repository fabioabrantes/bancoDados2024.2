import { Request, Response } from "express";

import ListAllUserUseCase from "../../core/user/useCases/listAllUsers";


class ListAllUsersController {
  async handle(req: Request, res: Response) {

    console.log("adicionei o userId",req.userId);
    const result = await ListAllUserUseCase.execute();

    res.status(result.status).json(result.body);
  }
}

export default new ListAllUsersController();