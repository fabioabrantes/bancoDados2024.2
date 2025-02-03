import { sign } from "jsonwebtoken";
import { compare } from "bcryptjs";

import repositoryUserPrisma from "../../../database/repositories/repositoryUserPrisma";

type Params = {
  email: string;
  password: string;
}

class Authenticate {


  async execute({ email, password }: Params) {

    //validação dos campus email e passowrd

    ///validação verificando se o usario já está cadastrrado
    const user = await repositoryUserPrisma.findByEmail(email);

    if (!user) {
      return { message: "Error: email ou password inválidos.", status: 400 }
    }

    const verifyPassword = await compare(password, user.password);

    if (!verifyPassword) {
      return { message: "Error: email ou password inválidos.", status: 400 }
    }

    const token = sign(
      {
        id: user.id
      },
      process.env.TOKEN_KEY as string,
      {
        expiresIn: "1d"
      }
    );


    return { token };

  }
}

export default new Authenticate();