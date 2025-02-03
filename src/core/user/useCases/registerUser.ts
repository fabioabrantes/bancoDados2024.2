import repositoryUserPrisma from "../../../database/repositories/repositoryUserPrisma";
import { UserModel } from '../model/User';

type MessageResponse = {
  message: string;
  status: number;
}
class RegisterUserUseCase {

  async execute(user: Omit<UserModel,'id'>): Promise<MessageResponse> {

    let userExist = await repositoryUserPrisma.findByCpf(user.cpf);
    if (userExist !== null) {
      return { message: "Error: cliente já existe no banco.", status: 400 }
    }
   
    await repositoryUserPrisma.registerUser(user);
    return { message: "Success: Registro realizado com sucesso.", status: 201 };
  }
}

export default new RegisterUserUseCase();