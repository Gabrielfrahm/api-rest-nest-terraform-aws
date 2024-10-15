import { ApiProperty } from '@nestjs/swagger';

export class GetUserByIDResponseDTO {
  @ApiProperty({
    example: 'random-uuid',
    description: 'ID of User',
  })
  id: string;

  @ApiProperty({
    example: 'John Doe',
    description: 'the name of User',
  })
  name: string;

  @ApiProperty({
    example: 'John@Doe.com',
    description: 'the e-mail of User',
  })
  email: string;

  @ApiProperty({
    example: '2024-08-10T00:00:000Z',
    description: 'when the user was created',
  })
  createdAt: string;

  @ApiProperty({
    example: '2024-09-10T00:00:000Z',
    description: 'when the user was updated',
  })
  updatedAt: string;

  constructor(props: GetUserByIDResponseDTO) {
    this.id = props.id;
    this.name = props.name;
    this.email = props.email;
    this.createdAt = props.createdAt;
    this.updatedAt = props.updatedAt;
  }
}
