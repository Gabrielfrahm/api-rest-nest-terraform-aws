import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserRequestDTO {
  @ApiProperty({
    example: 'John doe',
    description: 'the name of user',
  })
  @IsNotEmpty()
  @IsString()
  public name: string;

  @ApiProperty({
    example: 'John@doe.com',
    description: 'the e-mail of user',
  })
  @IsNotEmpty()
  @IsEmail()
  public email: string;

  @ApiProperty({
    example: '*******',
    description: 'the password of user',
  })
  @IsNotEmpty()
  @IsString()
  public password: string;
}
