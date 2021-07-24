import * as actions from '../ActionCreators/actions';
import { updateObject } from './utility';

const initialState = {
  _name: '',
  _email: '',
  _phone: '',
  _balance: '',
  _role: '',
  _token: '',
  _message: '',
  authenticated: false,
  loading: false,
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case actions.LOADING_ACTION:
      return updateObject(state, {
        loading: true,
      });

    case actions.LOGIN_ACTION:
      return updateObject(state, {
        authenticated: true,
        _name: action.name,
        _email: action.email,
        _phone: action.phone,
        _balance: action.balance,
        _role: action.role,
        _token: action.token,
      });

    case actions.REMOVE_USER:
      return updateObject(state, {
        authenticated: false,
      });

    case actions.REGISTER_ACTION:
      return updateObject(state, {
        message: action.message,
      });

    default:
      return state;
  }
};

export default auth;
