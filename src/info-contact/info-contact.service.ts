import { Injectable } from '@nestjs/common';
import { CreateInfoContactInput } from './dto/create-info-contact.input';

@Injectable()
export class InfoContactService {
  createInfoContact(createInfoContactInput: CreateInfoContactInput) {
    return 'This action adds a new infoContact';
  }

  findAll() {
    return `This action returns all infoContact`;
  }

}
