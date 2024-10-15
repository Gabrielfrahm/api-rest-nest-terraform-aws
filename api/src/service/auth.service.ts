import { BadRequestException, Injectable } from '@nestjs/common';

import { UsersRepository } from '@root/repository/user.repository';
import { compare } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { TokenPayload } from '@root/shared/types';
import { JWT_SECRET } from '@root/shared/constantes';

interface Credentials {
  email: string;
  password: string;
}

@Injectable()
export class AuthService {
  constructor(
    private readonly userRepository: UsersRepository,
    private readonly jwtService: JwtService,
  ) {}

  async login(credentials: Credentials): Promise<string> {
    const { email, password } = credentials;

    const user = await this.userRepository.getUserByEmail(email);

    if (!user) {
      throw new BadRequestException('User not found');
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new BadRequestException('Bad Credentials');
    }

    const payload: TokenPayload = {
      sub: user.id,
      name: user.name,
      email: user.email,
      exp: Math.floor(Date.now() / 1000) + 60 * 60,
      iat: Math.floor(Date.now() / 1000),
      aud: 'teste',
    };

    const token = await this.jwtService.signAsync(payload, {
      secret: JWT_SECRET,
    });

    return token;
  }
}
