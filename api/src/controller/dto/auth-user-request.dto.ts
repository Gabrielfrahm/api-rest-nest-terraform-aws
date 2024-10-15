import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class AuthUserRequestDTO {
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
