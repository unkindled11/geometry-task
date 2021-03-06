import { createAsyncThunk } from '@reduxjs/toolkit';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import * as services from '../../shared/services/auth';

//login
export const signIn = createAsyncThunk(
  'auth/signIn',
  async (data, { rejectWithValue }) => {
    try {
      const user = await services.signIn(data);
      Notify.success('Поздравляю,вы вошли!');
      return user;
    } catch (error) {
      Notify.failure('Что-то пошло не так...');
      return rejectWithValue(error);
    }
  }
);

export const getCurrentUser = createAsyncThunk(
  'auth/getCurrentUser',
  async (_, { rejectWithValue, getState }) => {
    try {
      const { auth } = getState();
      const { accessToken } = auth;
      const user = await services.getCurrentUser(accessToken);
      return user;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
  {
    condition: (_, { getState }) => {
      const { auth } = getState();
      const { accessToken } = auth;
      if (!accessToken) return false;
      return;
    },
  }
);

//logOut
export const logOut = createAsyncThunk('auth/logOut', async () => {
  await services.logOut;
  Notify.success('Вы вышли!');
  return;
});
