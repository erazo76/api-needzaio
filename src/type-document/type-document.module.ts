import { Module } from '@nestjs/common';
import { TypeDocumentService } from './type-document.service';
import { TypeDocumentResolver } from './type-document.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeDocument } from './entities/type-document.entity';
import { Document } from 'src/document/entities/document.entity';
import { DocumentService } from 'src/document/document.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([TypeDocument, Document])
  ],
  providers: [
    TypeDocumentResolver, 
    TypeDocumentService,
    DocumentService
  ]
})
export class TypeDocumentModule {}
