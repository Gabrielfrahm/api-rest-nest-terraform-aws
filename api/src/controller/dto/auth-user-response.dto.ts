import { ApiProperty } from '@nestjs/swagger';

export class AuthResponseDTO {
  @ApiProperty({
    example: 'jwt token',
    description: 'The accessToken of the login user',
  })
  public accessToken: string;

  constructor(accessToken: string) {
    this.accessToken = accessToken;
  }
}
