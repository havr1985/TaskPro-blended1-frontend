import { createSlice, isAnyOf } from "@reduxjs/toolkit"
import { addDashboardThunk, allDashboardsThunk } from "./dashboardOperation"


const INITIAL_STATE = {
    dashboards: [],
    isLoading: false,
    error: null,
}

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
                state.dashboards.push(action.payload)
            })
            .addMatcher(
                isAnyOf(
                    allDashboardsThunk.pending,
                    addDashboardThunk.pending
                ),
                (state) => {
                    state.isLoading = true;
                    state.error = null;
                }
            )
            .addMatcher(
                isAnyOf(
                    allDashboardsThunk.rejected,
                    addDashboardThunk.rejected,
                ),
                (state, action) => {
                    state.isLoading = false;
                    state.error = action.payload
                }
            ),
});

export const dashboardsReducer = dashboardSlice.reducer;