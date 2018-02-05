import {User} from './user';

export interface Login {

  message: string;
  token: string;
  user: object;  // User
}
