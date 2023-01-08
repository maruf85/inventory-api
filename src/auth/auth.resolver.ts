import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AuthService } from './auth.service';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation('login')
  async login(@Args('loginUserInput') loginUserInput: Prisma.UserCreateInput) {
    const accessToken = await this.authService.login(
      loginUserInput.email.toLowerCase(),
      loginUserInput.password,
    );

    return accessToken;
  }
}
