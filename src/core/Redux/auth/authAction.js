import axios from 'axios';
import { message } from 'antd';
import { sideBar } from '../../Array/array'
var url = 'http://10.1.1.20:8085'

export const Authentication = (value) => {
    const key = 'updatable';
    message.loading({ content: 'Verifying User...', key });
    return async (dispatch) => {
        return axios({
            method: 'post',
            url: `${url}/login`,
            data: value,
        }).then(response => {
            setTimeout(() => { message.error({ content: [response.data.message], key, duration: 2 }) }, 1000);
            if (response.data.status === true) {
                sessionStorage.setItem("Login", JSON.stringify(response.data))
                window.location.replace(`/ZeronSec${sideBar[0].SideMenu[sessionStorage.getItem('current')].routingPath}`)
            }
            dispatch({
                type: 'FOUND_USER',
                payload: response.data
            })
        })
            .catch((error) => {
                if (error.data && error.status === 404) {
                    message.error({ content: 'User not found', key, duration: 2 })
                } else {
                    message.error({ content: 'Authentication : Please check your network connection and try again.', key, duration: 2 });
                }
                return error;
            });
    };
};
export const ForgetPassword = (email) => {
    const key = 'updatable';
    message.loading({ content: 'Verifying Email...', key });
    return async (dispatch) => {
        return axios({
            method: 'post',
            url: `${url}/forgot-password?email=${email}`,
        }).then(response => {
            setTimeout(() => { message.error({ content: [response.data.message], key, duration: 2 }) }, 1000);
            if (response.data.status === true) { window.location.replace('/OTP') }
            dispatch({
                type: 'FORGET_PASSWORD',
                payload: response.data
            })
        })
            .catch((error) => {
                if (error.response !== undefined) {
                    message.error({ content: error.response.data.message, key, duration: 2 })
                } else {
                    message.error({ content: 'Authentication : Please check your network connection and try again.', key, duration: 2 });
                }
                return error;
            });
    };
};

export const GetOtp = (otp) => {
    const key = 'updatable';
    message.loading({ content: 'Verifying OTP...', key });
    return async (dispatch) => {
        return axios({
            method: 'post',
            url: `${url}/verify-otp?otp=${otp}`,
        }).then(response => {
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
                if (error.response !== undefined) {
                    message.error({ content: error.response.data.message, key, duration: 2 })
                } else {
                    message.error({ content: 'Authentication : Please check your network connection and try again.', key, duration: 2 });
                }
                return error;
            });
    };
};

export const ChangePassword = (value) => {
    const key = 'updatable';
    message.loading({ content: 'Verifying Passwords...', key });
    return async (dispatch) => {
        return axios({
            method: 'post',
            url: `${url}/change-password`,
            data: value,
        }).then(response => {
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
                if (error.response !== undefined) {
                    message.error({ content: error.response.data.message, key, duration: 2 })
                } else {
                    message.error({ content: 'Authentication : Please check your network connection and try again.', key, duration: 2 });
                }
                return error;
            });
    };
};
