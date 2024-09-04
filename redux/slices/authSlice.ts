// redux/slices/authSlice.ts

import { UserResponse } from "@/app/types/login_type";
import { DataSignUpResponse } from "@/app/types/signup_type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FulfilledAction, PendingAction, RejectedAction } from "../reduxType";
import { signup } from "../actions/authAction";

interface AuthState {
  isAuthenticated: boolean;
  token?: string;
  userResponse?: UserResponse; // Update this to match your types
  signUpResponse?: DataSignUpResponse;
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
    register(state, action: PayloadAction<DataSignUpResponse>) {
      state.signUpResponse = action.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.token = undefined;
      state.userResponse = undefined;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signup.fulfilled, (state, action) => {
      console.log("data res", action.payload);
      state.signUpResponse = action.payload;
    });
    builder.addCase(signup.pending, (state) => {
      console.log("pending");
    });
    builder.addCase(signup.rejected, (state, action) => {
      console.log("rejected", action.error.message);
    });
  },
});

export const { login, register, logout } = authSlice.actions;

export default authSlice.reducer;
