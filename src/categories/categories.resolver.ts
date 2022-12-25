import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CategoriesService } from './categories.service';

@Resolver('Category')
export class CategoriesResolver {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Mutation('createCategory')
  create(
    @Args('createCategoryInput')
    createCategoryInput: Prisma.CategoryCreateInput,
  ) {
    return this.categoriesService.create(createCategoryInput);
  }

  @Query('categories')
  findAll() {
    return this.categoriesService.findAll();
  }

  @Query('category')
  findOne(@Args('id') id: string) {
    return this.categoriesService.findOne({ categoryId: id });
  }

  @Mutation('updateCategory')
  update(
    @Args('updateCategoryInput')
    updateCategoryInput: Prisma.CategoryCreateInput,
  ) {
    return this.categoriesService.update(
      updateCategoryInput.categoryId,
      updateCategoryInput,
    );
  }

  @Mutation('removeCategory')
  remove(@Args('id') id: string) {
    return this.categoriesService.remove({ categoryId: id });
  }
}
