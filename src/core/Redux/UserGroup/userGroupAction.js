import axios from 'axios';

var url = 'http://10.1.1.158:8080'

export const UserGroupData = () => {
    return async (dispatch) => {
        return axios({
            method: 'get',
            url: `${url}/group/getAll`,
        }).then(response => {
            console.log(response, 'userGroup')
            dispatch({
                type: 'GET_USER_GROUP_DATA',
                payload: response.data
            })
        })
            .catch((error) => {
                console.log(error, "error")
            });
    };
};

export const GetUser = () => {
    return async (dispatch) => {
        return axios({
            method: 'get',
            url: `${url}/group/getUsers`,
        }).then(response => {
            console.log(response.data, "FindUser response");
            dispatch({
                type: 'FIND_USERGROUP_DATA',
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