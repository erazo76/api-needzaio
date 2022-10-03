import { Module } from '@nestjs/common';
import { DocumentService } from './document.service';
import { DocumentResolver } from './document.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Document } from './entities/document.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Document])
  ],
  providers: [
    DocumentResolver, 
    DocumentService
  ]
})
export class DocumentModule {}
