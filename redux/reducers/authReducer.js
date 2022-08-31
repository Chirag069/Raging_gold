import {USER_LOGOUT, USER_LOGIN, AUTH_LOADING} from '../actions/types';
import AsyncStorage from "@react-native-async-storage/async-storage";



const initialState = {
  userToken: null,
  authLoading: false,
  Token
};
const Token = AsyncStorage.getItem("userToken");


export default (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        userToken: action.payload,
      };
    case AUTH_LOADING:
      return {
        ...state,
        authLoading: action.payload,
      };
    case USER_LOGOUT:
      return {
        ...state,
        userToken: null,
      };
    default:
      return state;
  }
};
