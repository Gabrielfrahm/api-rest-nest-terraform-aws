import { Injectable } from '@nestjs/common';
import { User } from '@root/domain/user.domain';

@Injectable()
export class UsersRepository {
  private readonly users: User[] = [];

  async createUser(user: User): Promise<void> {
    this.users.push(user);
  }

  async getUserByEmail(email: string): Promise<User | undefined> {
    return this.users.find((item) => item.email === email);
  }

  async getUserByID(userID: string): Promise<User | undefined> {
    return this.users.find((item) => item.id === userID);
  }
}
