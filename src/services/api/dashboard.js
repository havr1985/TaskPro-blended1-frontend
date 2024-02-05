import instance from "./auth";

export const requestAllDashboards = async () => {
    const { data } = await instance.get('dashboard');
    return data;
} 

export const requestAddDashboard = async (values) => {
    const { data } = await instance.post('dashboard', values);
    return data;
}