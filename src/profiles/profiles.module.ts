import { Module } from '@nestjs/common';
import { ProfilesService } from './profiles.service';
import { ProfilesResolver } from './profiles.resolver';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  providers: [ProfilesResolver, ProfilesService, PrismaService],
})
export class ProfilesModule {}
