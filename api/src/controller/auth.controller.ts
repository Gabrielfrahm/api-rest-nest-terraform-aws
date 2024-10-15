import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthUserRequestDTO } from './dto/auth-user-request.dto';
import { AuthService } from '@root/service/auth.service';
import { AuthResponseDTO } from './dto/auth-user-response.dto';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(
    @Body() credentials: AuthUserRequestDTO,
  ): Promise<AuthResponseDTO> {
    const accessToken = await this.authService.login({
      email: credentials.email,
      password: credentials.password,
    });

    return new AuthResponseDTO(accessToken);
  }
}
