import type { TGender } from '@/shared/types';

export interface ILoginFormData {
  login: string;
  password: string;
  rememberMe: boolean;
}

export interface ILoginCredentials {
  username: string;
  password: string;
}

export interface ILoginResponse {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: TGender;
  image: string;
  token: string;
}
