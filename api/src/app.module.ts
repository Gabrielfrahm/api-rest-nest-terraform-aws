import { Module } from '@nestjs/common';
import { UserController } from './controller/users.controller';
import { UserService } from './service/user.service';
import { UsersRepository } from './repository/user.repository';
import { AuthController } from './controller/auth.controller';
import { AuthService } from './service/auth.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    JwtModule.register({
      global: true,
    }),
  ],
  controllers: [UserController, AuthController],
  providers: [UserService, UsersRepository, AuthService],
})
export class AppModule {}
