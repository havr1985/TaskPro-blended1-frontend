import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
	addCardThunk,
	addColumnThunk,
	addDashboardThunk,
	allDashboardsThunk,
	deleteCardThunk,
	deleteColumnThunk,
	deleteDashboardThunk,
	getDashboardByIDThunk,
	updateCardThunk,
	updateColumnThunk,
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
			.addCase(addColumnThunk.fulfilled, (state, action) => {
				state.isLoading = false;
				state.error = null;
				state.currentDashboard.column.push(action.payload);
			})
			.addCase(deleteColumnThunk.fulfilled, (state, action) => {
				state.isLoading = false;
				state.error = null;
				state.currentDashboard.column = state.currentDashboard.column.filter(item => item._id !== action.payload._id);
			})
			.addCase(updateColumnThunk.fulfilled, (state, action) => {
				state.isLoading = false;
				state.error = null;
				const { _id, title } = action.payload;
				const columnIdx = state.currentDashboard.column.findIndex(item => item._id === _id);
				state.currentDashboard.column[columnIdx].title = title;
			})
			.addCase(addCardThunk.fulfilled, (state, action) => {
				state.isLoading = false;
				state.error = null;
				const idx = state.currentDashboard.column.findIndex(item => item._id === action.payload.owner);
				if (!state.currentDashboard.column[idx].card) {
					state.currentDashboard.column[idx].card = [];
				}

				state.currentDashboard.column[idx].card = [...state.currentDashboard.column[idx].card, action.payload];
			})
			.addCase(deleteCardThunk.fulfilled, (state, action) => {
				state.isLoading = false;
				state.error = null;
				// // state.currentDashboard.column[action.payload.owner] = state.currentDashboard.column[action.payload.owner].filter(item => item._id !== action.payload._id);
				// console.log(state.currentDashboard.column);
				// console.log(action.payload);

				const { owner, _id } = action.payload;
				const columnIdx = state.currentDashboard.column.findIndex(item => item._id === owner);
				if (columnIdx !== -1) {
					state.currentDashboard.column[columnIdx].card = state.currentDashboard.column[columnIdx].card.filter(item => item._id !== _id);
				}
			})
			.addCase(updateCardThunk.fulfilled, (state, action) => {
				state.isLoading = false;
				state.error = null;
				const { _id, title, description, priority, deadline, owner } = action.payload;
				const idxCol = state.currentDashboard.column.findIndex(item => item._id === owner);
				const idxCard = state.currentDashboard.column[idxCol].cards.findIndex(item => item._id === _id);
				state.currentDashboard.column[idxCol].cards[idxCard] = {
					...state.currentDashboard.column[idxCol].cards[idxCard],
					title,
					description,
					priority,
					deadline,
				};
			})

			.addMatcher(
				isAnyOf(
					allDashboardsThunk.pending,
					addDashboardThunk.pending,
					getDashboardByIDThunk.pending,
					updateDashboardThunk.pending,
					deleteDashboardThunk.pending,
					addColumnThunk.pending,
					deleteColumnThunk.pending,
					addCardThunk.pending,
					deleteCardThunk.pending,
					sendNeedHelpThunk.pending
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
					deleteDashboardThunk.rejected,
					addColumnThunk.rejected,
					deleteColumnThunk.rejected,
					updateDashboardThunk.rejected,
					addCardThunk.rejected,
					deleteCardThunk.rejected,
					updateCardThunk.rejected,
					sendNeedHelpThunk.rejected
				),
				(state, action) => {
					state.isLoading = false;
					state.error = action.payload;
				}
			),
});

export const dashboardsReducer = dashboardSlice.reducer;
