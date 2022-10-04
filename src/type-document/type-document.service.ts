import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTypeDocumentInput } from './dto/create-type-document.input';
import { TypeDocument } from './entities/type-document.entity';

@Injectable()
export class TypeDocumentService {
  logger: Logger;  
  constructor(@InjectRepository(TypeDocument) private typeDocumentRepository: Repository<TypeDocument>) 
    { this.logger = new Logger('Reports Service'); }

    async createTypeDocument(createTypeDocumentInput: CreateTypeDocumentInput): Promise<TypeDocument>{ 
      try{      
          const newTypeDocument = this.typeDocumentRepository.create(createTypeDocumentInput);
          return this.typeDocumentRepository.save(newTypeDocument);                
      } catch (e) {
        this.logger.log(e);
      } 
    }

    async findAll(): Promise<TypeDocument[]>{  
      return this.typeDocumentRepository.find();
    }

}
