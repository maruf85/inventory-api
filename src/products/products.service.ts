import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  create(createProductInput: Prisma.ProductCreateInput) {
    return this.prisma.product.create({
      data: createProductInput,
    });
  }

  findAll() {
    return this.prisma.product.findMany();
  }

  findOne(productWhereUniqueInput: Prisma.ProductWhereUniqueInput) {
    return this.prisma.product.findUnique({
      where: productWhereUniqueInput,
    });
  }

  update(id: string, updateProductInput: Prisma.ProductUpdateInput) {
    return this.prisma.product.update({
      where: { id },
      data: updateProductInput,
    });
  }

  remove(productWhereUniqueInput: Prisma.ProductWhereUniqueInput) {
    return this.prisma.product.delete({
      where: productWhereUniqueInput,
    });
  }
}
