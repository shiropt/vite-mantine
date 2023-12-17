import { Reducer } from 'redux';
import { Account, AccountAction } from './type';
import { actionTypes } from './actionType';

const initialState: Account = {
  name: '',
  email: '',
  picture: '',
};

// eslint-disable-next-line @typescript-eslint/default-param-last
export const reducer: Reducer<Account, AccountAction> = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_ACCOUNT: {
      const { name, email, picture } = action.payload;
      const account: Account = { name, email, picture };
      return account;
    }
    default:
      return state;
  }
};
