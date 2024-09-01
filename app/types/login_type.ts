// types/authTypes.ts

export interface UserResponse {
  userId: string;
  userName: string;
  email: string;
  roles: string[];
  // Add other properties as needed
}

export interface LoginResponse {
  result: {
    token: string;
    userResponse: UserResponse;
  };
}
