import { Module } from '@nestjs/common';
import { InfoContactService } from './info-contact.service';
import { InfoContactResolver } from './info-contact.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InfoContact } from './entities/info-contact.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([InfoContact])
  ],
  providers: [
    InfoContactResolver, 
    InfoContactService
  ]
})
export class InfoContactModule {}
