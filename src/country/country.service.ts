import { Injectable } from '@nestjs/common';
import { CreateCountryInput } from './dto/create-country.input';

@Injectable()
export class CountryService {
  create(createCountryInput: CreateCountryInput) {
    return 'This action adds a new country';
  }

  findAll() {
    return `This action returns all country`;
  }

}
