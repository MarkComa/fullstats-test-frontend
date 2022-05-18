import { createSlice } from "@reduxjs/toolkit";

type State = {
	email: string;
	password: string;
	isAuth: boolean;
	access?: string;
	refresh?: string;
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
		login(state, action) {
      state.access = action.payload.access,
	    state.refresh = action.payload.refresh,
    },
		logout(state): void {
			state.access = undefined,
	    state.refresh = undefined,
			localStorage.removeItem("token");
		},
	},
});
