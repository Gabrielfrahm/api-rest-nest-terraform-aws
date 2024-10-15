import { randomUUID } from 'crypto';

export type UserProps = {
  name: string;
  email: string;
  password: string;
};

export type UserUpdate = Partial<User> & UserProps;

export class User {
  id: string;
  name: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;

  constructor(props: UserUpdate) {
    Object.assign(
      this,
      {
        id: randomUUID(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      props,
    );
  }
}
