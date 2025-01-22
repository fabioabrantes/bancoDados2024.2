import { PrismaClient } from '@prisma/client';

import { UserModel } from '../../core/user/model/User';

class UserRepositoryPrisma {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async registerUser(user: Omit<UserModel, 'id'>): Promise<UserModel> {
    return this.prisma.user.create({
      data: user
    });
  }

  async findByCpf(cpf: string): Promise<UserModel | null> {
    return this.prisma.user.findUnique({
      where: {
        cpf
      }
    })
  }

  async findAll(): Promise<UserModel[]> {
    return this.prisma.user.findMany({
      orderBy: {
        name: 'asc'
      }
    });
  }

}


export default new UserRepositoryPrisma();