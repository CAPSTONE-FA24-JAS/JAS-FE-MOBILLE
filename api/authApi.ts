// authApi.ts

import { LoginResponse } from "@/app/types/login_type";
import { login, register } from "@/redux/slices/authSlice";
import { AppDispatch } from "@/redux/store";
import axios from "axios";

const API_URL = process.env.EXPO_PUBLIC_API_URL || "http://localhost:7251";

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
  email: string,
  password: string,
  dispatch: AppDispatch
): Promise<void> => {
  try {
    console.log("Bắt đầu đăng nhập...", email, password);

    const response = await axios.post<LoginResponse>(
      `${API_URL}/api/Authentication/Login`,
      {
        email,
        password,
      }
    );

    const { data } = response.data;

    dispatch(
      login({
        token: data.accessToken,
        userResponse: {
          userId: data.account.email,
          userName: `${data.account.firstName} ${data.account.lastName}`,
          email: data.account.email,
          roles: ["user"],
        },
      })
    );
    console.log("Đăng nhập thành công.");
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Axios error:", error.toJSON()); // Thêm log chi tiết về lỗi Axios
    } else {
      console.error("Lỗi đăng nhập:", error);
    }
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

    console.log("Dispatching register..."); // Debug log
    dispatch(
      register({
        userId: user.userId,
        userName: user.userName,
        email: user.email,
        roles: user.roles,
      })
    );
    console.log("Registration dispatched successfully."); // Debug log
  } catch (error) {
    console.error("Registration error:", error);
    throw error;
  }
};
