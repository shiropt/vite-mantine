import { actionTypes } from './actionType';

export type Auth0User = {
  name?: string;
  given_name?: string;
  family_name?: string;
  middle_name?: string;
  nickname?: string;
  preferred_username?: string;
  profile?: string;
  picture?: string;
  website?: string;
  email?: string;
  email_verified?: boolean;
  gender?: string;
  birthdate?: string;
  zoneinfo?: string;
  locale?: string;
  phone_number?: string;
  phone_number_verified?: boolean;
  address?: string;
  updated_at?: string;
  sub?: string;
  [key: string]: any;
};

export type Account = Pick<Auth0User, 'name' | 'email' | 'picture'>;

export type AccountAction = {
  readonly type: typeof actionTypes.SET_ACCOUNT;
  readonly payload: Auth0User;
};
