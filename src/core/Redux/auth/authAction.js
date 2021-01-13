import axios from 'axios';

var url = 'http://10.1.1.20:8080'

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
                console.log(error, "error")
            });
    };
};

export const ForgetPassword = (email) => {
    return async (dispatch) => {
        return axios({
            method: 'post',
            url: `${url}/forgot-password?email=${email}`,
        }).then(response => {
            dispatch({
                type: 'FORGET_PASSWORD',
                payload: response.data
            })
            console.log(response, "res")
            if (response.data.status === true) {
                window.location.replace('/OTP')
            }
        })
            .catch((error) => {
                console.log(error, "error")
            });
    };
};

export const GetOtp = (otp) => {
    return async (dispatch) => {
        return axios({
            method: 'post',
            url: `${url}/verify-otp?otp=${otp}`,
        }).then(response => {
            console.log(response, "res")
            if (response.data.status === true) {
                window.location.replace('/NewPassword')
            }
            dispatch({
                type: 'REQUEST_OTP',
                payload: response.data
            })
        })
            .catch((error) => {
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
            if (response.data.status === true) {
                window.location.replace('/')
            }
            dispatch({
                type: 'CHANGE_PASSWORD',
                payload: response.data
            })
        })
            .catch((error) => {
                console.log(error, "error")
            });
    };
};
