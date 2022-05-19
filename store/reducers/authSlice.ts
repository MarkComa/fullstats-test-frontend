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
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		login(state, action: PayloadAction<{access: string, refresh: string}>) {
      state.access = action.payload.access,
	    state.refresh = action.payload.refresh
    },
		logout(state): void {
			state.access = null,
	    state.refresh = null,
			localStorage.removeItem("token");
		},
	},
});
