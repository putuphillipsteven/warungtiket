import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
	user: {
		id: null,
		email: '',
		username: '',
	},
	isLogin: false,
};

export const loginSlice = createSlice({
	name: 'login',
	initialState,
	reducers: {
		setUser: (state, action) => {
			const { id, email, username } = action.payload;

			state.user = {
				id,
				email,
				username,
			};
		},
		loginSuccess: (state, action) => {
			state.isLogin = true;
		},
		logOutSuccess: (state, action) => {
			state.user.id = null;
			state.user.email = '';
			state.user.username = '';
			state.isLogin = false;
			localStorage.removeItem('token');
		},
		keepLoginSuccess: (state) => {
			state.isLogin = true;
		},
	},
});
export const login = (email, password) => {
	return async (dispatch) => {
		try {
			const res = await axios.post('http://localhost:8000/auth/login', {
				email,
				password,
			});
			localStorage.setItem('token', res?.data?.data?.token);
			dispatch(setUser(res?.data?.data?.user));
			dispatch(loginSuccess());
		} catch (err) {
			throw err;
		}
	};
};

export const keepLogin = () => {
	return async (dispatch) => {
		try {
			const token = localStorage.getItem('token');

			if (token) {
				const res = await axios.get('http://localhost:8000/auth/keep-login', {
					headers: {
						Authorization: `Bearer ${token}`,
					},
				});

				dispatch(setUser(res?.data?.data));
				dispatch(keepLoginSuccess());
			}
		} catch (err) {
			localStorage.removeItem('token');
			alert(err?.response?.data);
		}
	};
};

export const { loginSuccess, logOutSuccess, setUser, keepLoginSuccess } = loginSlice.actions;

export default loginSlice.reducer;
