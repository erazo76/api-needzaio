import { Module } from '@nestjs/common';
import { InfoContactService } from './info-contact.service';
import { InfoContactResolver } from './info-contact.resolver';

@Module({
  providers: [
    InfoContactResolver, 
    InfoContactService
  ]
})
export class InfoContactModule {}
