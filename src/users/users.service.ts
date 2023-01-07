import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(createUserInput: Prisma.UserCreateInput) {
    const password = createUserInput.password;
    const hashedPassword = await bcrypt.hash(password, 10);

    return this.prisma.user.create({
      data: {
        email: createUserInput.email,
        password: hashedPassword,
      },
    });
  }

  findAll() {
    return this.prisma.user.findMany();
  }

  findOne(userWhereUniqueInput: Prisma.UserWhereUniqueInput) {
    return this.prisma.product.findUnique({
      where: userWhereUniqueInput,
    });
  }

  update(id: string, updateUserInput: Prisma.UserUpdateInput) {
    return this.prisma.product.update({
      where: { id },
      data: updateUserInput,
    });
  }

  remove(userWhereUniqueInput: Prisma.UserWhereUniqueInput) {
    return this.prisma.user.delete({
      where: userWhereUniqueInput,
    });
  }
}
