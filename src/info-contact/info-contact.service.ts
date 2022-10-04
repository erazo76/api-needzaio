import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateInfoContactInput } from './dto/create-info-contact.input';
import { InfoContact } from './entities/info-contact.entity';

@Injectable()
export class InfoContactService {
  logger: Logger;  
  constructor(@InjectRepository(InfoContact) private infoContactRepository: Repository<InfoContact>) 
    { this.logger = new Logger('Reports Service'); }

    async createInfoContact(createInfoContactInput: CreateInfoContactInput): Promise<InfoContact>{ 
      try{      
          const newInfoContact = this.infoContactRepository.create(createInfoContactInput);
          return this.infoContactRepository.save(newInfoContact);                
      } catch (e) {
        this.logger.log(e);
      } 
    }

    async findAll(): Promise<InfoContact[]>{  
      return this.infoContactRepository.find();
    }
}
