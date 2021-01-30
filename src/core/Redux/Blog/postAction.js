import axios from 'axios';
import store from '../store'

var url = 'http://10.1.1.20:8085'
// var url = 'http://10.1.1.244:8085'


export const BlogData = () => {
    return async (dispatch) => {
        return axios({
            method: 'get',
            url: `${url}/blogPost/getAllBlogs`,
            headers: { 'Authorization': `Bearer ${JSON.parse(localStorage.getItem('Login')).data.jwtToken.token}` }

        }).then(response => {
            console.log(response, 'blogAction')
            dispatch({
                type: 'GET_CARD_DATA',
                payload: response

            })
        }).catch((error) => {
            console.log(error, "errorBlog")
        });
    };
};

export const BlogCreate = (data) => {
    return async (dispatch) => {
        return axios({
            method: 'post',
            url: `${url}/blogPost/createBlog`,
            data: data,
            headers: { 'Authorization': `Bearer ${JSON.parse(localStorage.getItem('Login')).data.jwtToken.token}` }

        }).then(response => {
            console.log(response, "Registration")
            dispatch({
                type: 'CREATE_NEW_BLOG',
                payload: response
            })
        }).catch((error) => {
            console.log(error.response, "error")
        });
    };
};


export const Delete = (index) => {
    let get = store.getState().data.blogs
    const maindata = get.filter(p => p.token !== index)

    return async (dispatch) => {
        dispatch({
            type: 'DELETE_POST_DATA',
            payload: maindata
        })
    };
};

