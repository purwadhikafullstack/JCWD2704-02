import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { user } from '../initial';
import { TUser } from '../../../../models/user.model';
import { deleteCookie } from 'cookies-next';
export const userSlice = createSlice({
  name: 'auth',
  initialState: user as TUser,
  reducers: {
    login: (state, action: PayloadAction<TUser>) => {
      state = { ...state, ...action.payload };
      return state;
    },
    logout: (state) => {
      deleteCookie('auth');
      state = user;
      return state;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
