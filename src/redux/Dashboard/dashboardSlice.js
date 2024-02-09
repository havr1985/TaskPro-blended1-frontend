import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
	addDashboardThunk,
	allDashboardsThunk,
	deleteDashboardThunk,
	getDashboardByIDThunk,
	sendNeedHelpThunk,
	updateDashboardThunk,
} from "./dashboardOperation";

const INITIAL_STATE = {
	dashboards: [],
	currentDashboard: {},
	isLoading: false,
	error: null,
};

const dashboardSlice = createSlice({
	name: "dashboards",
	initialState: INITIAL_STATE,
	extraReducers: builder =>
		builder
			.addCase(allDashboardsThunk.fulfilled, (state, action) => {
				state.dashboards = action.payload;
				state.isLoading = false;
			})
			.addCase(addDashboardThunk.fulfilled, (state, action) => {
				state.isLoading = false;
				state.error = null;
				state.dashboards = [...state.dashboards, action.payload];
			})
			.addCase(getDashboardByIDThunk.fulfilled, (state, action) => {
				state.isLoading = false;
				state.error = null;
				state.currentDashboard = action.payload;
			})
			.addCase(updateDashboardThunk.fulfilled, (state, action) => {
				state.isLoading = false;
				state.error = null;
				const { _id, name, icon, backgroundURL } = action.payload;
				const dashboardIdx = state.dashboards.findIndex(item => item._id === _id);
				state.dashboards[dashboardIdx] = {
					...state.dashboards[dashboardIdx],
					name,
					icon,
					backgroundURL,
				};
			})
			.addCase(deleteDashboardThunk.fulfilled, (state, action) => {
				state.isLoading = false;
				state.error = null;
				state.dashboards = state.dashboards.filter(item => item._id !== action.payload._id);
			})
			.addCase(sendNeedHelpThunk.fulfilled, (state, action) => {
				state.isLoading = false;
				state.error = null;
			})

			.addMatcher(
				isAnyOf(
					allDashboardsThunk.pending,
					addDashboardThunk.pending,
					getDashboardByIDThunk.pending,
					updateDashboardThunk.pending,
					deleteDashboardThunk.pending
				),
				state => {
					state.isLoading = true;
					state.error = null;
				}
			)
			.addMatcher(
				isAnyOf(
					allDashboardsThunk.rejected,
					addDashboardThunk.rejected,
					getDashboardByIDThunk.rejected,
					updateDashboardThunk.rejected,
					deleteDashboardThunk.rejected
				),
				(state, action) => {
					state.isLoading = false;
					state.error = action.payload;
				}
			),
});

export const dashboardsReducer = dashboardSlice.reducer;
