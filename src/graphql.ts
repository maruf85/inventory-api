
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export enum Role {
    ADMIN = "ADMIN",
    USER = "USER"
}

export class LoginUserInput {
    email: string;
    password: string;
}

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

export class CreateProfileInput {
    firstName?: Nullable<string>;
    lastName?: Nullable<string>;
    address?: Nullable<string>;
    phone?: Nullable<string>;
    userId?: Nullable<string>;
}

export class UpdateProfileInput {
    id: string;
    firstName?: Nullable<string>;
    lastName?: Nullable<string>;
    address?: Nullable<string>;
    phone?: Nullable<string>;
    userId?: Nullable<string>;
}

export class CreateUserInput {
    email: string;
    password: string;
    role: Role;
}

export class UpdateUserInput {
    id: string;
    email?: Nullable<string>;
    password?: Nullable<string>;
    role?: Nullable<Role>;
}

export class LoginResponse {
    access_token?: Nullable<string>;
}

export abstract class IMutation {
    abstract login(loginUserInput: LoginUserInput): LoginResponse | Promise<LoginResponse>;

    abstract createCategory(createCategoryInput: CreateCategoryInput): Category | Promise<Category>;

    abstract updateCategory(updateCategoryInput: UpdateCategoryInput): Category | Promise<Category>;

    abstract removeCategory(id: string): Nullable<Category> | Promise<Nullable<Category>>;

    abstract createProduct(createProductInput: CreateProductInput): Product | Promise<Product>;

    abstract updateProduct(updateProductInput: UpdateProductInput): Product | Promise<Product>;

    abstract removeProduct(id: string): Nullable<Product> | Promise<Nullable<Product>>;

    abstract createProfile(createProfileInput: CreateProfileInput): Profile | Promise<Profile>;

    abstract updateProfile(updateProfileInput: UpdateProfileInput): Profile | Promise<Profile>;

    abstract removeProfile(id: string): Nullable<Profile> | Promise<Nullable<Profile>>;

    abstract createUser(createUserInput: CreateUserInput): User | Promise<User>;

    abstract updateUser(updateUserInput: UpdateUserInput): User | Promise<User>;

    abstract removeUser(id: string): Nullable<User> | Promise<Nullable<User>>;
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

    abstract profiles(): Nullable<Profile>[] | Promise<Nullable<Profile>[]>;

    abstract profile(id: string): Nullable<Profile> | Promise<Nullable<Profile>>;

    abstract users(role?: Nullable<Role>): Nullable<User>[] | Promise<Nullable<User>[]>;

    abstract user(id: string): Nullable<User> | Promise<Nullable<User>>;
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

export class Profile {
    id: string;
    firstName?: Nullable<string>;
    lastName?: Nullable<string>;
    address?: Nullable<string>;
    phone?: Nullable<string>;
}

export class User {
    id: string;
    email: string;
    password: string;
    role: Role;
    profile?: Nullable<Profile>;
}

export type DateTime = any;
type Nullable<T> = T | null;
