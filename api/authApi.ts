// authApi.ts

import { LoginResponse } from "@/app/types/login_type";
import { login, register } from "@/redux/slices/authSlice";
import { AppDispatch } from "@/redux/store";

// Define a mock response
const mockLoginResponse: LoginResponse = {
  result: {
    token: "fake-user-token-12345",
    userResponse: {
      userId: "001",
      userName: "John Doe",
      email: "test@example.com",
      roles: ["user"], // Add other properties if needed
    },
  },
};

// Define a mock response for register
const mockRegisterResponse = {
  message: "User registered successfully",
  user: {
    userId: "002",
    userName: "Jane Doe",
    email: "jane@example.com",
    roles: ["user"], // Add other properties if needed
  },
};

// authApi.ts

export const LoginApi = async (
  username: string,
  password: string,
  dispatch: AppDispatch
): Promise<void> => {
  try {
    console.log("Starting login..."); // Debug log
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const response = mockLoginResponse;
    const { token, userResponse } = response.result;

    console.log("Dispatching login..."); // Debug log
    dispatch(
      login({
        token,
        userResponse: {
          userId: userResponse.userId,
          userName: userResponse.userName,
          email: userResponse.email,
          roles: userResponse.roles,
        },
      })
    );
    console.log("Login dispatched successfully."); // Debug log
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
};

export const registerApi = async (
  email: string,
  password: string,
  dispatch: AppDispatch
): Promise<void> => {
  try {
    console.log("Starting registration..."); // Debug log
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const response = mockRegisterResponse;
    const { user } = response;

    // console.log("Dispatching register..."); // Debug log
    // dispatch(
    //   register({
    //     userId: user.userId,
    //     userName: user.userName,
    //     email: user.email,
    //     roles: user.roles,
    //   })
    // );
    console.log("Registration dispatched successfully."); // Debug log
  } catch (error) {
    console.error("Registration error:", error);
    throw error;
  }
};
