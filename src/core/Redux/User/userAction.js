import store from '../store'
import axios from 'axios';
import { message } from 'antd';
const url = 'http://10.1.1.20:8085'

export const UserData = () => {
    const key = 'updatable';
    return async (dispatch) => {
        return axios({
            method: 'get',
            url: `${url}/user/listAll`,
            headers: { 'Authorization': `Bearer ${JSON.parse(sessionStorage.getItem('Login')).data.jwtToken.token}` }
        }).then(response => {
            dispatch({
                type: 'GET_USER_DATA',
                payload: response.data
            })
        }).catch((error) => {
            if (error.response !== undefined) {
                message.error({ content: `User : ${error.response.data.message}`, key, duration: 2 })
                if (error.response.status === 401) { sessionStorage.clear(); window.location.replace("/") }
            } else {
                message.error({ content: 'net::ERR_CONNECTION_TIMED_OUT', key, duration: 2 });
            }
            return error;
        });
    };
};
export const Registration = (data) => {
    const key = 'updatable';
    return async (dispatch) => {
        return axios({
            method: 'post',
            url: `${url}/user/create`,
            data: data,
            headers: { 'Authorization': `Bearer ${JSON.parse(sessionStorage.getItem('Login')).data.jwtToken.token}` }
        }).then(response => {
            dispatch({
                type: 'USER_REGISTRATION',
                payload: response.data
            })
        }).catch((error) => {
            if (error.response !== undefined) {
                message.error({ content: `User : ${error.response.data.message}`, key, duration: 2 })
            } else {
                message.error({ content: 'net::ERR_CONNECTION_TIMED_OUT', key, duration: 2 });
            }
            return error;
        });
    };
};
export const DeleteUser = (record) => {
    const key = 'updatable';
    return async (dispatch) => {
        return axios({
            method: 'delete',
            url: `${url}/user/delete/${record}`,
            headers: { 'Authorization': `Bearer ${JSON.parse(sessionStorage.getItem('Login')).data.jwtToken.token}` }
        }).then(response => {
            let get = store.getState().table.table
            const maindata = get.filter(p => p.tokenuser !== record)
            dispatch({
                type: 'DELETE_USER',
                payload: maindata,
                delStatus: response.data.status,
            })
        }).catch((error) => {
            if (error.response !== undefined) {
                message.error({ content: `User : ${error.response.data.message}`, key, duration: 2 })
            } else {
                message.error({ content: 'net::ERR_CONNECTION_TIMED_OUT', key, duration: 2 });
            }
            return error;
        });
    };
};
export const FindUser = (record) => {
    const key = 'updatable';
    return async (dispatch) => {
        return axios({
            method: 'get',
            url: `${url}/user/findByToken/${record}`,
            headers: { 'Authorization': `Bearer ${JSON.parse(sessionStorage.getItem('Login')).data.jwtToken.token}` }
        }).then(response => {
            dispatch({
                type: 'FIND_USER_DATA',
                payload: response,
                findStatus: response.data.status
            })
        }).catch((error) => {
            if (error.response !== undefined) {
                message.error({ content: `User : ${error.response.data.message}`, key, duration: 2 })
            } else {
                message.error({ content: 'net::ERR_CONNECTION_TIMED_OUT', key, duration: 2 });
            }
            return error;
        });
    };
};
export const Update = (data, token, index) => {
    const key = 'updatable';
    return async (dispatch) => {
        return axios({
            method: 'put',
            url: `${url}/user/update/${token}`,
            headers: { 'Authorization': `Bearer ${JSON.parse(sessionStorage.getItem('Login')).data.jwtToken.token}` },
            data: data,
        }).then(response => {
            dispatch({
                type: 'USER_UPDATE',
                payload: response.data,
                index: index
            })
        }).catch((error) => {
            if (error.response !== undefined) {
                message.error({ content: `User : ${error.response.data.message}`, key, duration: 2 })
            } else {
                message.error({ content: 'net::ERR_CONNECTION_TIMED_OUT', key, duration: 2 });
            }
            return error;
        });
    };
};
