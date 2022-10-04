import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CountryService } from './country.service';
import { Country } from './entities/country.entity';
import { CreateCountryInput } from './dto/create-country.input';

@Resolver(of => Country)
export class CountryResolver {
  constructor(private readonly countryService: CountryService) {}

  @Mutation(returns => Country)
  createCountry(@Args('createCountryInput') createCountryInput: CreateCountryInput) {
    return this.countryService.createCountry(createCountryInput);
  }

  @Query(returns => [Country])
  countries() {
    return this.countryService.findAll();
  }

}
