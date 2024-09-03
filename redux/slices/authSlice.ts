// redux/slices/authSlice.ts

import { UserResponse } from "@/app/types/login_type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  isAuthenticated: boolean;
  token?: string;
  userResponse?: UserResponse; // Update this to match your types
}

const initialState: AuthState = {
  isAuthenticated: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (
      state,
      action: PayloadAction<{ token: string; userResponse: UserResponse }>
    ) => {
      state.isAuthenticated = true;
      state.token = action.payload.token;
      state.userResponse = action.payload.userResponse;
    },
    register(state, action: PayloadAction<AuthState["userResponse"]>) {
      state.isAuthenticated = true;
      state.userResponse = action.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.token = undefined;
      state.userResponse = undefined;
    },
  },
});

export const { login, register, logout } = authSlice.actions;

export default authSlice.reducer;
