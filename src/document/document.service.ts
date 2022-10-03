import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDocumentInput } from './dto/create-document.input';
import { Document } from './entities/document.entity';

@Injectable()
export class DocumentService {
  logger: Logger;  
  constructor(@InjectRepository(Document) private documentRepository: Repository<Document>) 
    { this.logger = new Logger('Reports Service'); }

    async createDocument(createDocumentInput: CreateDocumentInput): Promise<Document>{ 
      try{      
          const newDocument = this.documentRepository.create(createDocumentInput);
          return this.documentRepository.save(newDocument);                
      } catch (e) {
        this.logger.log(e);
      } 
    }

    async findAll(): Promise<Document[]>{  
      return this.documentRepository.find();
    }

}
