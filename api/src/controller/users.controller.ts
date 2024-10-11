import { Body, Controller, HttpStatus, Post } from '@nestjs/common';
import { CreateUserRequestDTO } from './dto/create-user-request.dto';
import { CreateUserResponseDTO } from './dto/create-user-response.dto';

import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserService } from '@root/service/user.service';

@ApiTags('users')
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Post()
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'user created',
    type: CreateUserResponseDTO,
  })
  public async createUser(
    @Body() createUserRequestDTO: CreateUserRequestDTO,
  ): Promise<CreateUserResponseDTO> {
    const { id } = await this.userService.createUser({
      email: createUserRequestDTO.email,
      name: createUserRequestDTO.name,
      password: createUserRequestDTO.password,
    });
    return new CreateUserResponseDTO(id);
  }
}
