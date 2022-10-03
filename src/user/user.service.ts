import { Injectable, Logger } from '@nestjs/common';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserInput } from './dto/create-user.input';
import { EncoderService } from './encoder.service';
import { v4 } from 'uuid';

@Injectable()
export class UserService {
  logger: Logger;  
  constructor(@InjectRepository(User) private userRepository: Repository<User>,
  private encoderService: EncoderService) 
    { this.logger = new Logger('Reports Service'); }

    async createUser(createUserInput: CreateUserInput): Promise<User>{ 
      createUserInput.password = await  this.encoderService.encodePassword(createUserInput.password);
      createUserInput.verificationToken = v4();
      try{      
            const newUser = this.userRepository.create(createUserInput);
            return this.userRepository.save(newUser);                
      } catch (e) {
        this.logger.log(e);
      } 

    }

    async findAll(): Promise<User[]>{  
        return this.userRepository.find();
    }
}
