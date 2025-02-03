import repositoryUserPrisma from "../../../database/repositories/repositoryUserPrisma";
import { UserModel } from '../model/User';

type MessageResponse = {
  message: string;
  status: number;
}
class UpdatedUserUseCase {

  async execute(id: string, user: Omit<UserModel, 'id'>): Promise<MessageResponse> {

    const userExist = await repositoryUserPrisma.findById(id);
    if (!userExist) {
      return { message: "Error: cliente naõ existe.", status: 400 }
    }

    await repositoryUserPrisma.updateUser(id,user);
    return { message: "Success: Remoção realizado com sucesso.", status: 200 };
  }
}

export default new UpdatedUserUseCase();