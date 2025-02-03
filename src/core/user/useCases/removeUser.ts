import repositoryUserPrisma from "../../../database/repositories/repositoryUserPrisma";


type MessageResponse = {
  message: string;
  status: number;
}
class RemoveUserUseCase {

  async execute(id: string): Promise<MessageResponse> {

    const userExist = await repositoryUserPrisma.findById(id);
    if (!userExist) {
      return { message: "Error: cliente naõ existe.", status: 400 }
    }

    await repositoryUserPrisma.removeUser(id);
    return { message: "Success: Remoção realizado com sucesso.", status: 200 };
  }
}

export default new RemoveUserUseCase();