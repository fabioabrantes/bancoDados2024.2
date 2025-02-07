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
class RemoveUserUseCase {

  async execute(id: string): Promise<MessageResponseError | MessageResponseSuccess> {

    const userExist = await repositoryUserPrisma.findById(id);
    if (!userExist) {
      throw new ErrorCustom(400,"Error: cliente naõ existe.");
    }

    const userBD = await repositoryUserPrisma.removeUser(id);
    return { body: userBD, status: 200 };
  }
}

export default new RemoveUserUseCase();