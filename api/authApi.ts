// authApi.ts

import { LoginResponse } from "@/app/types/login_type";
import { login } from "@/redux/slices/authSlice";
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
