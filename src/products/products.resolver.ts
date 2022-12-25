import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ProductsService } from './products.service';
import { Prisma } from '@prisma/client';

@Resolver('Product')
export class ProductsResolver {
  constructor(private readonly productsService: ProductsService) {}

  @Mutation('createProduct')
  create(
    @Args('createProductInput') createProductInput: Prisma.ProductCreateInput,
  ) {
    return this.productsService.create(createProductInput);
  }

  @Query('products')
  findAll() {
    return this.productsService.findAll();
  }

  @Query('product')
  findOne(@Args('id') id: string) {
    return this.productsService.findOne({ id });
  }

  @Mutation('updateProduct')
  update(
    @Args('updateProductInput') updateProductInput: Prisma.ProductCreateInput,
  ) {
    return this.productsService.update(
      updateProductInput.id,
      updateProductInput,
    );
  }

  @Mutation('removeProduct')
  remove(@Args('id') id: string) {
    return this.productsService.remove({ id });
  }
}
