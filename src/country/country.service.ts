import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCountryInput } from './dto/create-country.input';
import { Country } from './entities/country.entity';

@Injectable()
export class CountryService {
  logger: Logger;  
  constructor(@InjectRepository(Country) private countryRepository: Repository<Country>) 
    { this.logger = new Logger('Reports Service'); }

    async createCountry(createCountryInput: CreateCountryInput): Promise<Country>{ 
      try{      
          const newCountry = this.countryRepository.create(createCountryInput);
          return this.countryRepository.save(newCountry);                
      } catch (e) {
        this.logger.log(e);
      } 
    }

    async findAll(): Promise<Country[]>{  
      return this.countryRepository.find();
    }
}
