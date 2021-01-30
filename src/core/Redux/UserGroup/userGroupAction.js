import axios from 'axios';
import store from '../store'

var url = 'http://10.1.1.20:8085'
// var url = 'http://10.1.1.244:8085'



export const UserGroupData = () => {
    return async (dispatch) => {
        return axios({
            method: 'get',
            url: `${url}/group/getAll`,
            headers: { 'Authorization': `Bearer ${JSON.parse(localStorage.getItem('Login')).data.jwtToken.token}` }

        }).then(response => {
            console.log(response, 'userGroup')
            dispatch({
                type: 'GET_USER_GROUP_DATA',
                payload: response.data
            })
        }).catch((error) => {
            console.log(error.response, "error")
        });
    };
};

export const GetUserData = () => {
    return async (dispatch) => {
        return axios({
            method: 'get',
            url: `${url}/group/getUsers`,
            headers: { 'Authorization': `Bearer ${JSON.parse(localStorage.getItem('Login')).data.jwtToken.token}` }

        }).then(response => {
            console.log(response.data, "FindUser");
            dispatch({
                type: 'GET_USERS_DATA',
                payload: response.data
            })
        }).catch((error) => {
            console.log(error.response, "error")
        });
    };
};

export const Registration = (data) => {
    return async (dispatch) => {
        return axios({
            method: 'post',
            url: `${url}/group/add`,
            data: data,
            headers: { 'Authorization': `Bearer ${JSON.parse(localStorage.getItem('Login')).data.jwtToken.token}` }

        }).then(response => {
            console.log(response, "Registration")
            dispatch({
                type: 'USER_GROUP_REGISTRATION',
                payload: response.data
            })
        }).catch((error) => {
            console.log(error.response, "error")
        });
    };
};

export const DeleteUserGroup = (record) => {
    return async (dispatch) => {
        return axios({
            method: 'delete',
            url: `${url}/group/delete/${record}`,
            headers: { 'Authorization': `Bearer ${JSON.parse(localStorage.getItem('Login')).data.jwtToken.token}` }

        }).then(response => {
            let get = store.getState().groupTable.groupTable
            const maindata = get.filter(p => p.token !== record)
            dispatch({
                type: 'DELETE_USER_GROUP',
                payload: maindata
            })
            console.log(response, "DeleteUser")
        }).catch((error) => {
            console.log(error.response, "error")
        });
    };
};


export const FindUserGroup = (record) => {
    return async (dispatch) => {
        return axios({
            method: 'get',
            url: `${url}/group/findByToken/${record}`,
            headers: { 'Authorization': `Bearer ${JSON.parse(localStorage.getItem('Login')).data.jwtToken.token}` }

        }).then(response => {
            console.log(response.data, "FindUser");
            dispatch({
                type: 'FIND_USERGROUP_DATA',
                payload: response
            })
        }).catch((error) => {
            console.log(error.response, "error")
        });
    };
};

export const UpdateGroup = (data, token, index) => {
    return async (dispatch) => {
        return axios({
            method: 'put',
            url: `${url}/group/update/${token}`,
            data: data,
            headers: { 'Authorization': `Bearer ${JSON.parse(localStorage.getItem('Login')).data.jwtToken.token}` }

        }).then(response => {
            console.log(response.data, "Update")
            dispatch({
                type: 'USER_GROUP_UPDATE',
                payload: response.data,
                index: index,
            })
        }).catch((error) => {
            console.log(error.response, "error")
        });
    };
};

