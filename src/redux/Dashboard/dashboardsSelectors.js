// import { createSelector } from "@reduxjs/toolkit";

export const selectAllDashboards = (state) => state.dashboards.dashboards;

export const selectCurrentDashboard = (state) =>
	state.dashboards.currentDashboard;

export const selectUpdateDashboardDate = (state) =>
	state.dashboards.dataUpdatedDashboard;