export interface UserResponse {
  refresh: string;
  access: string;
  }

export interface LoginRequest {
  username: string;
  password: string;
}