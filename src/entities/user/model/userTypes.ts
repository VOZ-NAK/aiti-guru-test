import type { TGender } from '@/shared/types';

export interface IUser {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: TGender;
  image: string;
}
