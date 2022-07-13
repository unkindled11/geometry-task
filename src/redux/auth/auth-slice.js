import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import { signIn, getCurrentUser, logOut } from './auth-operation';

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    //login
    [signIn.pending]: (store, _) => ({ ...store, loading: true, error: null }),
    [signIn.fulfilled]: (store, { payload }) => {
      const { accessToken, userData } = payload;
      return {
        ...store,
        loading: false,
        isLogin: true,
        accessToken,
        userData,
      };
    },
    [signIn.rejected]: (store, { payload }) => ({
      ...store,
      loading: false,
      error: payload,
    }),
    //current check
    [getCurrentUser]: (store, _) => ({ ...store, loading: true, error: null }),
    [getCurrentUser.fulfilled]: (store, { payload }) => ({
      ...store,
      loading: false,
      isLogin: true,
      userData: payload,
    }),
    [getCurrentUser.rejected]: (_, { payload }) => ({
      ...initialState,
      error: payload,
    }),
    //log out
    [logOut.pending]: (store, _) => ({ ...store, loading: true, error: null }),
    [logOut.fulfilled]: () => ({ ...initialState, loading: false }),
    [logOut.rejected]: () => ({ ...initialState, loading: false }),
  },
});
export default authSlice.reducer;
