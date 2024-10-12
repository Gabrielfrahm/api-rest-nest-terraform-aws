import { BadRequestException, Injectable } from '@nestjs/common';
import { User } from '@root/domain/user.domain';
import { UsersRepository } from '@root/repository/user.repository';
import { hash } from 'bcrypt';

interface CreateUserParams {
  name: string;
  email: string;
  password: string;
}

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UsersRepository) {}

  public async createUser(params: CreateUserParams): Promise<string> {
    const userExistis = await this.userRepository.getUserByEmail(params.email);

    if (userExistis) {
      throw new BadRequestException('Email already in use');
    }

    const passwordHash = await hash(params.password, 12);

    const user = new User({
      name: params.name,
      email: params.email,
      password: passwordHash,
    });

    await this.userRepository.createUser(user);
    return user.id;
  }

  async getUserByID(userID: string): Promise<any> {
    const user = await this.userRepository.getUserByID(userID);

    if (!user) {
      throw new BadRequestException('User not existing');
    }

    return user;
  }
}
