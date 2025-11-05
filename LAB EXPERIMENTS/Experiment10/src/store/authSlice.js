import { createSlice } from '@reduxjs/toolkit';
import StateShape from '../StateShape';

const authSlice = createSlice({
  name: 'auth',
  initialState: StateShape.auth,
  reducers: {
    login(state, action) {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.user = null;
    }
  }
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
