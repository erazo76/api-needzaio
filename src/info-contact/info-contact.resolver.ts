import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { InfoContactService } from './info-contact.service';
import { InfoContact } from './entities/info-contact.entity';
import { CreateInfoContactInput } from './dto/create-info-contact.input';


@Resolver(() => InfoContact)
export class InfoContactResolver {
  constructor(private readonly infoContactService: InfoContactService) {}

  @Mutation(() => InfoContact)
  createInfoContact(@Args('createInfoContactInput') createInfoContactInput: CreateInfoContactInput) {
    return this.infoContactService.createInfoContact(createInfoContactInput);
  }

  @Query(() => [InfoContact], { name: 'infoContact' })
  infoContact() {
    return this.infoContactService.findAll();
  }

}
