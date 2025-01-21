import { prisma, User } from "../service/prisma";

class RegisterUser {

  async execute(user: any) {
    const userCreated = await prisma.user.create({
      data: {
        email: user.email,
        cpf: user.cpf,
        name: user.name,
      }
    }
    );
  }
}

export default new RegisterUser();