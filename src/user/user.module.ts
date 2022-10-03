import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { EncoderService } from './encoder.service';
import { Document } from 'src/document/entities/document.entity';
import { DocumentService } from 'src/document/document.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([User,Document])
  ],
  providers: [
    UserService, 
    UserResolver, 
    EncoderService, 
    DocumentService
  ]
})
export class UserModule {}
