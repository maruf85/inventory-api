import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class ProfilesService {
  constructor(private prisma: PrismaService) {}

  create(createProfileInput: Prisma.ProfileCreateInput) {
    return this.prisma.profile.create({
      data: createProfileInput,
    });
  }
  findAll() {
    return this.prisma.profile.findMany({
      include: { user: true },
    });
  }

  findOne(profileWhereUniqueInput: Prisma.ProfileWhereUniqueInput) {
    return this.prisma.profile.findUnique({
      where: profileWhereUniqueInput,
    });
  }

  update(id: string, updateProfileInput: Prisma.ProfileUpdateInput) {
    return this.prisma.profile.update({
      where: { id },
      data: updateProfileInput,
    });
  }

  remove(profileWhereUniqueInput: Prisma.ProfileWhereUniqueInput) {
    return this.prisma.profile.delete({
      where: profileWhereUniqueInput,
    });
  }
}
