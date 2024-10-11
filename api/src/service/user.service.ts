import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';

interface CreateUserParams {
  name: string;
  email: string;
  password: string;
}

@Injectable()
export class UserService {
  public async createUser(params: CreateUserParams): Promise<{ id: string }> {
    console.log(params);
    return { id: randomUUID() };
  }
}
