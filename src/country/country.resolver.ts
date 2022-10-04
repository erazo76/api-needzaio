import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CountryService } from './country.service';
import { Country } from './entities/country.entity';
import { CreateCountryInput } from './dto/create-country.input';

@Resolver(() => Country)
export class CountryResolver {
  constructor(private readonly countryService: CountryService) {}

  @Mutation(() => Country)
  createCountry(@Args('createCountryInput') createCountryInput: CreateCountryInput) {
    return this.countryService.create(createCountryInput);
  }

  @Query(() => [Country], { name: 'country' })
  findAll() {
    return this.countryService.findAll();
  }

}
