import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { LoginRequest, UserResponse } from "./auth.types";

export const authApi = createApi({
	reducerPath: "auth/login/",
	baseQuery: fetchBaseQuery({ baseUrl: "https://api.fullstats.ru/api/v1/" }),
	endpoints: (build) => ({
		login: build.mutation<UserResponse, LoginRequest>({
			query: (credential) => ({
				url: "auth/login/",
				method: "POST",
				body: credential,
			}),
		}),
	}),
});

export const { useLoginMutation } = authApi;