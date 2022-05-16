export interface UserResponse {
  refresh: string;
  access: string;
  }

export interface LoginRequest {
  email: string;
  password: string;
}