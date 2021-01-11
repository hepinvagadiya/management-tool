import axios from 'axios';

export const Authentication = (username, password) => {
    return async (dispatch) => {
        return axios({
            method: 'post',
            url: 'http://10.1.1.20:8080/login',
            data: {
                "username": username,
                "password": password
            },
        }).then(response => {   
            console.log(response,"response")
            dispatch({
                type: 'FOUND_USER',
                payload: response.data
            })
        })
            .catch((error) => {
                console.log(error,"error")
                dispatch({
                    type: 'ERROR_FINDING_USER'
                })
            });
    };
};