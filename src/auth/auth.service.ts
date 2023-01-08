import { Injectable, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'prisma/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private prisma: PrismaService,
  ) {}
  async login(email: string, password: string) {
    const user = await this.prisma.user.findUnique({ where: { email } });

    if (!user) {
      throw new NotFoundException(`Invalid user!`);
    }

    const passwordValid = await bcrypt.compare(password, user.password);

    if (!passwordValid) {
      throw new NotFoundException(`Invalid user!`);
    }

    return this.generateTokens({
      sub: user.id,
    });
  }

  generateTokens(payload: { sub: string }) {
    return {
      access_token: this.generateAccessToken(payload),
    };
  }

  private generateAccessToken(payload: { sub: string }): string {
    return this.jwtService.sign(payload);
  }

  async validateUser(userId: string) {
    return await this.prisma.user.findUnique({ where: { id: userId } });
  }
}
