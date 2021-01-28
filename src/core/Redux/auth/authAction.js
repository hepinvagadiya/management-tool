import axios from 'axios';
import { message } from 'antd';

// var url = 'http://10.1.1.20:8085'
var url = 'http://10.1.1.244:8085'

export const Authentication = (username, password) => {
    return async (dispatch) => {
        return axios({
            method: 'post',
            url: `${url}/login`,
            data: {
                "username": username,
                "password": password
            },
        }).then(response => {
            console.log(response, "authResponse")
            const key = 'updatable';
            message.loading({ content: 'Verifying User...', key });
            setTimeout(() => {
                console.log(response)
                message.error({ content: [response.data.message], key, duration: 2 })
            }, 1000);
            if (response.data.status === true) {
                localStorage.setItem("Login", JSON.stringify(response.data))
                window.location.replace('/ZeronSec/users')
            }
            dispatch({
                type: 'FOUND_USER',
                payload: response.data
            })
        })
            .catch((error) => {
                const key = 'updatable';
                if (error.response.status === 404) { message.error({ content: 'User not found', key, duration: 2 }) } else { setTimeout(() => { message.error({ content: [error.response.data.message], key, duration: 2 }) }, 1000); }
                console.log(error.response, "auth error")
            });
    };
};

export const ForgetPassword = (email) => {
    return async (dispatch) => {
        return axios({
            method: 'post',
            url: `${url}/forgot-password?email=${email}`,
        }).then(response => {
            console.log(response, "res")
            const key = 'updatable';
            message.loading({ content: 'Verifying Email...', key });
            setTimeout(() => { message.error({ content: [response.data.message], key, duration: 2 }) }, 1000);
            if (response.data.status === true) { window.location.replace('/OTP') }
            dispatch({
                type: 'FORGET_PASSWORD',
                payload: response.data
            })
        })
            .catch((error) => {
                const key = 'updatable';
                if (error.response.status === 404) { message.error({ content: 'User not found', key, duration: 2 }) } else { setTimeout(() => { message.error({ content: [error.response.data.message], key, duration: 2 }) }, 1000); }
                console.log(error.response, "auth error")
            });
    };
};

export const GetOtp = (otp) => {
    return async (dispatch) => {
        return axios({
            method: 'post',
            url: `${url}/verify-otp?otp=${otp}`,
        }).then(response => {
            const key = 'updatable';
            message.loading({ content: 'Verifying OTP...', key });
            setTimeout(() => { message.error({ content: [response.data.message], key, duration: 2 }) }, 1000);
            if (response.data.status === true) {
                window.location.replace('/NewPassword')
            }
            dispatch({
                type: 'REQUEST_OTP',
                payload: response.data
            })
        })
            .catch((error) => {
                const key = 'updatable';
                setTimeout(() => { message.error({ content: [error.response.data.message], key, duration: 2 }) }, 1000);
                console.log(error, "error")
            });
    };
};

export const ChangePassword = (password, confirmPassword) => {
    return async (dispatch) => {
        return axios({
            method: 'post',
            url: `${url}/change-password`,
            data: {
                "newpassword": password,
                "confirmpassword": confirmPassword,
                "username": "hepin"
            },
        }).then(response => {
            console.log(response, "res")
            const key = 'updatable';
            message.loading({ content: 'Verifying Passwords...', key });
            setTimeout(() => { message.error({ content: [response.data.message], key, duration: 2 }) }, 1000);
            if (response.data.status === true) {
                window.location.replace('/')
            }
            dispatch({
                type: 'CHANGE_PASSWORD',
                payload: response.data
            })
        })
            .catch((error) => {
                const key = 'updatable';
                setTimeout(() => { message.error({ content: [error.response.data.message], key, duration: 2 }) }, 1000);
                console.log(error, "error")
            });
    };
};
