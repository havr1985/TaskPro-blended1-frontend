import axios from "axios";

const instance = axios.create({
  baseURL: "task-pro-backend-jm7o.onrender.com/api/",
});

export const setToken = token => {
    if (token) {
      return  instance.defaults.headers.common.Authorization = `Bearer ${token}`
    }
    instance.defaults.headers.common.Authorization = '';
};

// instance.interceptors.response.use(
//     response => response,
//     async error => {
        
//         if (error.response.status === 401 && !error.config._retry) {
//             error.config._retry = true;
            
//             const Token = JSON.parse(localStorage.getItem("persist:ref"));
//             const refreshToken = String(Token.refreshToken)
            
            
//             console.log(refreshToken)
//             const { data } = await instance.post('auth/refresh', {refreshToken: refreshToken} );
//             console.log("ya tut");
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

export const requestUserUpdate = async values => {
    const { data } = await instance.put('auth/users/update', values);
    return data;
}
