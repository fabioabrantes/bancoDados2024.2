import { PrismaClient } from '@prisma/client';

import { UserModel } from '../../core/user/model/User';

class UserRepositoryPrisma {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async registerUser(user: UserModel) {
    return await this.prisma.user.create({
      data: {
        name: user.name,
        cpf: user.cpf,
        email: user.email
      }
    });
  }

  async findByCpf(cpf: string) {
    return await this.prisma.user.findUnique({
      where: {
        cpf
      }
    });
  }

  async findAll() {
    return await this.prisma.user.findMany({
      orderBy: {
        name: "asc"
      }
    });
  }

  async removeUser(id:string){
     await this.prisma.user.delete({
      where:{
        id
      }
     });
  }

  async updateUser(id: string, user: UserModel) {
    await this.prisma.user.update({
      where: {
        id
      },
      data: {
        name: user.name,
        cpf: user.cpf,
        email: user.email
      }
    });
  }
}


export default new UserRepositoryPrisma();