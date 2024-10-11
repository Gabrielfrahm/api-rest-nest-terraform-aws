import { ApiProperty } from '@nestjs/swagger';

export class CreateUserResponseDTO {
  @ApiProperty({
    example: 'random-uuid',
    description: 'The id of the created user',
  })
  public id: string;

  constructor(id: string) {
    this.id = id;
  }
}
