import { Injectable, Logger } from '@nestjs/common';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserInput } from './dto/create-user.input';

@Injectable()
export class UserService {
  logger: Logger;  
  constructor(@InjectRepository(User) private userRepository: Repository<User>) 
    { this.logger = new Logger('Reports Service'); }

    createUser(createUserInput: CreateUserInput): Promise<User>{  
        const newUser = this.userRepository.create(createUserInput);
        return this.userRepository.save(newUser);
    }

    async findAll(): Promise<User[]>{  
        return this.userRepository.find();
    }
}
