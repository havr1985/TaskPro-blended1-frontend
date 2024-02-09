import instance from "./auth";

export const requestAllDashboards = async () => {
	const { data } = await instance.get("dashboard");
	return data;
};

export const requestAddDashboard = async values => {
	const { data } = await instance.post("dashboard", values);
	return data;
};

export const requestDashboardById = async dashboardId => {
	const { data } = await instance.get(`dashboard/${dashboardId}`);
	return data;
};

export const requestEditDashboard = async (dashboardId, values) => {
	const { data } = await instance.put(`dashboard/${dashboardId}`, values);
	return data;
};

export const requestDeleteDashboard = async dashboardId => {
	const { data } = await instance.delete(`dashboard/${dashboardId}`);
	return data;
};

export const requestUserNeedHelp = async info => {
	const { data } = await instance.post("dashboard/help", info);
	return data;
};
