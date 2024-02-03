import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
  changeAvatarThunk,
  changeThemeThunk,
  currentThunk,
  loginThunk,
  logoutThunk,
  registerThunk,
} from "./authOperation";

const INITIAL_STATE = {
  token: null,
  user: {
    id: null,
    username: null,
    email: null,
    theme: "dark",
    avatarURL: "",
  },
  register: false,
  authenticated: false,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: INITIAL_STATE,
  extraReducers: (builder) =>
    builder
      .addCase(registerThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.register = true;
        state.token = action.payload.accessToken;
        state.user = action.payload.user;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.register = true;
        state.token = action.payload.accessToken;
        state.user = action.payload.user;
        state.user.theme = action.payload.theme;
        state.authenticated = true;
      })
      .addCase(currentThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.authenticated = true;
        state.register = true;
        state.user = action.payload;
      })
      .addCase(logoutThunk.fulfilled, () => {
        return INITIAL_STATE;
      })
      .addCase(changeAvatarThunk.fulfilled, (state, action) => {
        state.user.avatarURL = action.payload;
      })
      .addCase(changeThemeThunk.fulfilled, (state, action) => {
        state.user.theme = action.payload.theme;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })

      .addMatcher(
        isAnyOf(
          registerThunk.pending,
          loginThunk.pending,
          currentThunk.pending,
          logoutThunk.pending,
          changeAvatarThunk.pending,
          changeThemeThunk.pending
        ),
        (state) => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          registerThunk.rejected,
          loginThunk.rejected,
          currentThunk.rejected,
          logoutThunk.rejected,
          changeAvatarThunk.rejected,
          changeThemeThunk.rejected
        ),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      ),
});

export const authReducer = authSlice.reducer;
