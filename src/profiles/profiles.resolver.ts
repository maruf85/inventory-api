import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProfilesService } from './profiles.service';

@Resolver('Profile')
export class ProfilesResolver {
  constructor(private readonly profilesService: ProfilesService) {}

  @Mutation('createProfile')
  create(
    @Args('createProfileInput') createProfileInput: Prisma.ProfileCreateInput,
  ) {
    return this.profilesService.create(createProfileInput);
  }

  @Query('profiles')
  findAll() {
    return this.profilesService.findAll();
  }

  @Query('profile')
  findOne(@Args('id') id: string) {
    return this.profilesService.findOne({ id });
  }

  @Mutation('updateProfile')
  update(
    @Args('updateProfileInput') updateProfileInput: Prisma.ProfileCreateInput,
  ) {
    return this.profilesService.update(
      updateProfileInput.id,
      updateProfileInput,
    );
  }

  @Mutation('removeProfile')
  remove(@Args('id') id: string) {
    return this.profilesService.remove({ id });
  }
}
