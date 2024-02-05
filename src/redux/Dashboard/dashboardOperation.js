import { createAsyncThunk } from "@reduxjs/toolkit";
import { requestAddDashboard, requestAllDashboards } from "../../services/api/dashboard";



export const allDashboardsThunk = createAsyncThunk(
    'dashboard/allDashboards',
    async (_, thunkAPI) => {
        try {
            const dashboards = await requestAllDashboards();
            return dashboards
        }
        catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
);

export const addDashboardThunk = createAsyncThunk(
    'dashboard/addDashboard',
    async (values, thunkAPI) => {
        try {
            const data = await requestAddDashboard(values);
            return data;
        }
        catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
);