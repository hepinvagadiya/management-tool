import store from '../store'
import axios from 'axios';

var url = 'http://10.1.1.20:8085'
export const UserData = () => {
    // const token = JSON.parse(localStorage.getItem('Login')).data.jwtToken.token
    return async (dispatch) => {
        return axios({
            method: 'get',
            url: `${url}/user/listAll`,
            headers: { 'Authorization': `Bearer ${JSON.parse(localStorage.getItem('Login')).data.jwtToken.token}` }
        }).then(response => {
            console.log(response, 'userDetail')
            dispatch({
                type: 'GET_USER_DATA',
                payload: response.data
            })
        }).catch((error) => {
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
            headers: { 'Authorization': `Bearer ${JSON.parse(localStorage.getItem('Login')).data.jwtToken.token}` }
        }).then(response => {
            console.log(response, "Registration")
            dispatch({
                type: 'USER_REGISTRATION',
                payload: response.data
            })
        }).catch((error) => {
            console.log(error.response, "error")
        });
    };
};

export const DeleteUser = (record) => {
    return async (dispatch) => {
        return axios({
            method: 'delete',
            url: `${url}/user/delete/${record}`,
            headers: { 'Authorization': `Bearer ${JSON.parse(localStorage.getItem('Login')).data.jwtToken.token}` }
        }).then(response => {
            let get = store.getState().table.table
            const maindata = get.filter(p => p.token !== record)
            dispatch({
                type: 'DELETE_USER',
                payload: maindata
            })
            console.log(response, "DeleteUser")
        }).catch((error) => {
            console.log(error.response, "error")
        });
    };
};

export const FindUser = (record) => {
    return async (dispatch) => {
        return axios({
            method: 'get',
            url: `${url}/user/findByToken/${record}`,
            headers: { 'Authorization': `Bearer ${JSON.parse(localStorage.getItem('Login')).data.jwtToken.token}` }
        }).then(response => {
            console.log(response.data, "FindUser");
            dispatch({
                type: 'FIND_USER_DATA',
                payload: response
            })
        }).catch((error) => {
            console.log(error.response, "error")
        });
    };
};

export const Update = (data, token, index) => {
    return async (dispatch) => {
        return axios({
            method: 'put',
            url: `${url}/user/update/${token}`,
            data: data,
            headers: { 'Authorization': `Bearer ${JSON.parse(localStorage.getItem('Login')).data.jwtToken.token}` }
        }).then(response => {
            console.log(response, "Update")
            dispatch({
                type: 'USER_UPDATE',
                payload: response.data,
                index: index
            })
        }).catch((error) => {
            console.log(error.response, "error")
        });
    };
};
