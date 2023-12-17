import { actionTypes } from './actionType';
import { AccountAction, Auth0User } from './type';

export const setAccount = (account: Auth0User): AccountAction => ({
  type: actionTypes.SET_ACCOUNT,
  payload: account,
});

export const actions = {
  setAccount,
};
