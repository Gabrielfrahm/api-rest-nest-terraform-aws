import { Module } from '@nestjs/common';
import { UserController } from './controller/users.controller';
import { UserService } from './service/user.service';
import { UsersRepository } from './repository/user.repository';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserService, UsersRepository],
})
export class AppModule {}
