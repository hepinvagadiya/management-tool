import axios from 'axios';
import store from '../store'
import { message } from 'antd';
var url = 'http://10.1.1.20:8085'

export const UserGroupData = () => {
    const key = 'updatable';
    return async (dispatch) => {
        return axios({
            method: 'get',
            url: `${url}/group/getAll`,
            headers: { 'Authorization': `Bearer ${JSON.parse(sessionStorage.getItem('Login')).data.jwtToken.token}` }
        }).then(response => {
            dispatch({
                type: 'GET_USER_GROUP_DATA',
                payload: response.data
            })
        }).catch((error) => {
            if (error.response !== undefined) {
                if (error.response.status === 401) { sessionStorage.clear(); window.location.replace("/") }
                message.error({ content: `UserGroup : ${error.response.data.message}`, key, duration: 2 })
            } else {
                message.error({ content: 'net::ERR_CONNECTION_TIMED_OUT', key, duration: 2 });
            }
            return error;
        });
    };
};
export const GetUserData = () => {
    const key = 'updatable';
    return async (dispatch) => {
        return axios({
            method: 'get',
            url: `${url}/group/getUsers`,
            headers: { 'Authorization': `Bearer ${JSON.parse(sessionStorage.getItem('Login')).data.jwtToken.token}` }
        }).then(response => {
            dispatch({
                type: 'GET_USERS_DATA',
                payload: response.data
            })
        }).catch((error) => {
            if (error.response !== undefined) {
                message.error({ content: `UserGroup : ${error.response.data.message}`, key, duration: 2 })
            } else {
                message.error({ content: 'net::ERR_CONNECTION_TIMED_OUT', key, duration: 2 });
            }
            return error;
        });
    };
};
export const Registration = (data) => {
    console.log('KFNJKDNJHFJSF')
    const key = 'updatable';
    return async (dispatch) => {
        return axios({
            method: 'post',
            url: `${url}/group/add`,
            data: data,
            headers: { 'Authorization': `Bearer ${JSON.parse(sessionStorage.getItem('Login')).data.jwtToken.token}` }
        }).then(response => {
            dispatch({
                type: 'USER_GROUP_REGISTRATION',
                payload: response.data
            })
        }).catch((error) => {
            if (error.response !== undefined) {
                message.error({ content: `UserGroup : ${error.response.data.message}`, key, duration: 2 })
            } else {
                message.error({ content: 'net::ERR_CONNECTION_TIMED_OUT', key, duration: 2 });
            }
            return error;
        });
    };
};
export const DeleteUserGroup = (record) => {
    const key = 'updatable';
    return async (dispatch) => {
        return axios({
            method: 'delete',
            url: `${url}/group/delete/${record}`,
            headers: { 'Authorization': `Bearer ${JSON.parse(sessionStorage.getItem('Login')).data.jwtToken.token}` }

        }).then(response => {
            let get = store.getState().groupTable.groupTable
            const maindata = get.filter(p => p.token !== record)
            dispatch({
                type: 'DELETE_USER_GROUP',
                payload: maindata,
                delStatus: response.data.status,
            })
        }).catch((error) => {
            if (error.response !== undefined) {
                message.error({ content: `UserGroup : ${error.response.data.message}`, key, duration: 2 })
            } else {
                message.error({ content: 'net::ERR_CONNECTION_TIMED_OUT', key, duration: 2 });
            }
            return error;
        });
    };
};
export const FindUserGroup = (record) => {
    const key = 'updatable';
    return async (dispatch) => {
        return axios({
            method: 'get',
            url: `${url}/group/findByToken/${record}`,
            headers: { 'Authorization': `Bearer ${JSON.parse(sessionStorage.getItem('Login')).data.jwtToken.token}` }
        }).then(response => {
            dispatch({
                type: 'FIND_USERGROUP_DATA',
                payload: response
            })
        }).catch((error) => {
            if (error.response !== undefined) {
                message.error({ content: `UserGroup : ${error.response.data.message}`, key, duration: 2 })
            } else {
                message.error({ content: 'net::ERR_CONNECTION_TIMED_OUT', key, duration: 2 });
            }
            return error;
        });
    };
};
export const UpdateGroup = (data, token, index) => {
    console.log("object")
    const key = 'updatable';
    return async (dispatch) => {
        return axios({
            method: 'put',
            url: `${url}/group/update/${token}`,
            data: data,
            headers: { 'Authorization': `Bearer ${JSON.parse(sessionStorage.getItem('Login')).data.jwtToken.token}` }
        }).then(response => {
            dispatch({
                type: 'USER_GROUP_UPDATE',
                payload: response.data,
                index: index,
            })
        }).catch((error) => {
            if (error.response !== undefined) {
                message.error({ content: `UserGroup : ${error.response.data.message}`, key, duration: 2 })
            } else {
                message.error({ content: 'net::ERR_CONNECTION_TIMED_OUT', key, duration: 2 });
            }
            return error;
        });
    };
};

