
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class CreateCategoryInput {
    categoryName: string;
    categoryDescription?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
}

export class UpdateCategoryInput {
    categoryId: string;
    categoryName: string;
    categoryDescription?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
}

export class CreateProductInput {
    productName: string;
    productDescription?: Nullable<string>;
    productUnit?: Nullable<string>;
    productPrice?: Nullable<number>;
    productQuantity?: Nullable<number>;
    createdAt?: Nullable<DateTime>;
    productCategoryId?: Nullable<string>;
}

export class UpdateProductInput {
    id: string;
    productName: string;
    productDescription?: Nullable<string>;
    productUnit?: Nullable<string>;
    productPrice?: Nullable<number>;
    productQuantity?: Nullable<number>;
    createdAt?: Nullable<DateTime>;
    productCategoryId?: Nullable<string>;
}

export class CreateUserInput {
    email: string;
    password: string;
}

export class UpdateUserInput {
    id: string;
    email?: Nullable<string>;
    password?: Nullable<string>;
}

export class Category {
    categoryId: string;
    categoryName: string;
    categoryDescription?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    products?: Nullable<Nullable<Product>[]>;
}

export abstract class IQuery {
    abstract categories(): Nullable<Category>[] | Promise<Nullable<Category>[]>;

    abstract category(id: string): Nullable<Category> | Promise<Nullable<Category>>;

    abstract products(): Nullable<Product>[] | Promise<Nullable<Product>[]>;

    abstract product(id: string): Nullable<Product> | Promise<Nullable<Product>>;

    abstract users(): Nullable<User>[] | Promise<Nullable<User>[]>;

    abstract user(id: string): Nullable<User> | Promise<Nullable<User>>;
}

export abstract class IMutation {
    abstract createCategory(createCategoryInput: CreateCategoryInput): Category | Promise<Category>;

    abstract updateCategory(updateCategoryInput: UpdateCategoryInput): Category | Promise<Category>;

    abstract removeCategory(id: string): Nullable<Category> | Promise<Nullable<Category>>;

    abstract createProduct(createProductInput: CreateProductInput): Product | Promise<Product>;

    abstract updateProduct(updateProductInput: UpdateProductInput): Product | Promise<Product>;

    abstract removeProduct(id: string): Nullable<Product> | Promise<Nullable<Product>>;

    abstract createUser(createUserInput: CreateUserInput): User | Promise<User>;

    abstract updateUser(updateUserInput: UpdateUserInput): User | Promise<User>;

    abstract removeUser(id: string): Nullable<User> | Promise<Nullable<User>>;
}

export class Product {
    id: string;
    productName: string;
    productDescription?: Nullable<string>;
    productUnit?: Nullable<string>;
    productPrice?: Nullable<number>;
    productQuantity?: Nullable<number>;
    createdAt?: Nullable<DateTime>;
    productCategoryId?: Nullable<string>;
    productCategory?: Nullable<Category>;
}

export class User {
    id: string;
    email?: Nullable<string>;
    password?: Nullable<string>;
}

export type DateTime = any;
type Nullable<T> = T | null;
