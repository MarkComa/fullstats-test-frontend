import { UserResponse } from "./../auth/auth.types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type State = {
	email: string;
	password: string;
	isAuth: boolean;
	access?: string | null;
	refresh?: string | null;
};
const initialState: State = {
	email: "",
	password: "string",
	isAuth: false,
	access: null,
	refresh: null,
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		login(state, action: PayloadAction<UserResponse>) {
      console.log(action.payload);
			(state.access = action.payload.access),
			(state.refresh = action.payload.refresh);
		},
		logout(state): void {
			(state.access = null),
				(state.refresh = null),
				localStorage.removeItem("token");
		},
	},
});
export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
