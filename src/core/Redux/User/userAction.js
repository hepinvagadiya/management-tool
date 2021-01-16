import store from '../store'
import axios from 'axios';

var url = 'http://10.1.1.144:8081'

export const UserData = () => {
    return async (dispatch) => {
        return axios({
            method: 'get',
            url: `${url}/user/listAll`,
        }).then(response => {
            console.log(response, 'userDetail response')
            dispatch({
                type: 'GET_USER_DATA',
                payload: response.data
            })
        })
            .catch((error) => {
                console.log(error, "error")
            });
    };
};

export const Registration = (data) => {
    return async (dispatch) => {
        return axios({
            method: 'post',
            url: `${url}/user/create`,
            data: data,
        }).then(response => {
            console.log(response, "Registration response")
            dispatch({
                type: 'USER_REGISTRATION',
                payload: response.data
            })
        })
            .catch((error) => {
                console.log(error, "error")
            });
    };
};

export const DeleteUser = (record) => {
    return async (dispatch) => {
        return axios({
            method: 'delete',
            url: `${url}/user/delete/${record}`,
        }).then(response => {
            let get = store.getState().table.table
            const maindata = get.filter(p => p.token !== record)
            dispatch({
                type: 'DELETE_USER',
                payload: maindata
            })
            console.log(response, "DeleteUser response")
        })
            .catch((error) => {
                console.log(error, "error")
            });
    };
};

export const FindUser = (record) => {
    return async (dispatch) => {
        return axios({
            method: 'get',
            url: `${url}/user/findByToken/${record}`,
        }).then(response => {
            console.log(response.data, "FindUser response");
            dispatch({
                type: 'FIND_USER_DATA',
                payload: response.data
            })
        })
            .catch((error) => {
                console.log(error, "error")
            });
    };
};