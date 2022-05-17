export interface UserResponse {
  refresh: string;
  access: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegistrationResponse {
  username: string;
  email: string;
  password: string;
}

export interface RegistrationRequest {
  username: string;
  email: string;
  password: string;
}