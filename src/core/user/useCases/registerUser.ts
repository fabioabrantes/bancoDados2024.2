import repositoryUserPrisma from "../../../database/repositories/repositoryUserPrisma";
import { ErrorCustom } from "../../../errors/ErrorsCustom";
import { UserModel } from '../model/User';

type MessageResponseSuccess = {
  body: UserModel;
  status: number;
}

type MessageResponseError = {
  body: string;
  status: number;
}

class RegisterUserUseCase {

  async execute(user: Omit<UserModel, 'id'>): Promise<MessageResponseSuccess | MessageResponseError> {

    let userExist = await repositoryUserPrisma.findByCpf(user.cpf);
    if (userExist !== null) {
      throw new ErrorCustom(400, "Error: cliente já existe no banco.");
    }

    const userBD = await repositoryUserPrisma.registerUser(user);
    return { body: userBD, status: 201 };
  }
}

export default new RegisterUserUseCase();