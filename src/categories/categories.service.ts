import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class CategoriesService {
  constructor(private prisma: PrismaService) {}

  create(createCategoryInput: Prisma.CategoryCreateInput) {
    return this.prisma.category.create({
      data: createCategoryInput,
    });
  }

  findAll() {
    return this.prisma.category.findMany();
  }

  findOne(categoryWhereUniqueInput: Prisma.CategoryWhereUniqueInput) {
    return this.prisma.category.findUnique({
      where: categoryWhereUniqueInput,
    });
  }

  update(id: string, updateCategoryInput: Prisma.CategoryUpdateInput) {
    return this.prisma.category.update({
      where: { categoryId: id },
      data: updateCategoryInput,
    });
  }

  remove(categoryWhereUniqueInput: Prisma.CategoryWhereUniqueInput) {
    return this.prisma.category.delete({
      where: categoryWhereUniqueInput,
    });
  }
}
