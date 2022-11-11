import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from './dto/create-user.dto';
import { UserEntity } from './entities/user.entity';
import { UserRepository } from './repository/user.repository';

@Injectable()
export class UserService {
  constructor(private readonly repository: UserRepository) {}

  async create(createUserDto: CreateUserDto): Promise<UserEntity> {
    const data = {
      ...createUserDto,
      password: await bcrypt.hash(createUserDto.password, 10),
    };

    const createdUser = await this.repository.create(data);
    return {
      ...createdUser,
      password: undefined,
    };
  }

  async findByEmail(email: string): Promise<UserEntity> {
    return this.repository.findByEmail(email);
  }
}
