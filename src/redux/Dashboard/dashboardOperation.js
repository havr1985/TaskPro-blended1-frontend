import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  requestAddColumn,
  requestAddDashboard,
  requestAllDashboards,
  requestDashboardById,
  requestDeleteColumn,
  requestDeleteDashboard,
  requestEditDashboard,
  requestUpdateColumn,
} from "../../services/api/dashboard";

export const allDashboardsThunk = createAsyncThunk(
  "dashboard/allDashboards",
  async (_, thunkAPI) => {
    try {
      const dashboards = await requestAllDashboards();
      return dashboards;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addDashboardThunk = createAsyncThunk(
  "dashboard/addDashboard",
  async (values, thunkAPI) => {
    try {
      const data = await requestAddDashboard(values);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getDashboardByIDThunk = createAsyncThunk(
  "dashboard/getById",
  async (dashboardId, thunkAPI) => {
    try {
      const data = await requestDashboardById(dashboardId);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateDashboardThunk = createAsyncThunk(
  "dashboard/updateDashboard",
  async ({ dashboardId, values }, thunkAPI) => {
    try {
      const data = await requestEditDashboard(dashboardId, values);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteDashboardThunk = createAsyncThunk(
  "dashboard/deleteDashboard",
  async (dashboardId, thunkAPI) => {
    try {
      const data = await requestDeleteDashboard(dashboardId);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addColumnThunk = createAsyncThunk(
  "dashboard/addColumn",
  async ({ dashboardId, title, owner }, thunkAPI) => {
    try {
      const data = await requestAddColumn(dashboardId, title, owner);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteColumnThunk = createAsyncThunk(
  "dashboard/deleteColumn",
  async (columnId, thunkAPI) => {
    try {
      const data = await requestDeleteColumn(columnId);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const updateColumnThunk = createAsyncThunk(
  "dashboard/updateColumn",
  async ({ columnId, title }, thunkAPI) => {
    try {
      const data = await requestUpdateColumn(columnId, title);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
