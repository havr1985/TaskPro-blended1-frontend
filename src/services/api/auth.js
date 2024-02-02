import axios from "axios";

const instance = axios.create({
  baseURL: "https://task-pro-backend-jm7o.onrender.com/api/",
});

export const setToken = token => {
    
         instance.defaults.headers.common.Authorization = `Bearer ${token}`
    
    
};

// instance.interceptors.response.use(
//     response => response,
//     async error => {
//         if (error.response.status === 401 && !error.config._retry) {
//             error.config._retry = true;
//             const refreshToken = localStorage.getItem("refreshToken");
//             const { data } = await instance.post('auth/refresh', { refreshToken });
//             setToken(data.accessToken);
//             localStorage.setItem('refreshToken', data.refreshToken);
//             return instance(error.config);
//         }
//         return Promise.reject(error)
//     }
// );

export const requestSignup = async values => {
    const { data } = await instance.post('auth/signup', values);
    setToken(data.accessToken);
    return data;
};

export const requestSignin = async values => {
    const { data } = await instance.post('auth/signin', values);
    setToken(data.accessToken);
    return (data);
};

export const requestCurrentUser = async () => {
    const { data } = await instance.get('auth/current');
    return data;
};

export const requestSignout = async () => {
    const { data } = await instance.post('auth/signout');
    setToken();
    return data;
};

export const requestAvatar = async values => {
    const { data } = await instance.patch('auth/users/avatars', values, {
        headers: {
            'Content-Type': 'multipart/from-data',
        },
    });
    return data;
};

export const requestTheme = async values => {
    const { data } = await instance.patch('auth/users/theme', values);
    return data;
};

