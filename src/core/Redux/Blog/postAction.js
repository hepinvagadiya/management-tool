import axios from 'axios';
import store from '../store'
import { message } from 'antd';

var url = 'http://10.1.1.20:8085'

export const BlogData = () => {
    const key = 'updatable';
    return async (dispatch) => {
        return axios({
            method: 'get',
            url: `${url}/blogPost/getAllBlogs`,
            headers: { 'Authorization': `Bearer ${JSON.parse(sessionStorage.getItem('Login')).data.jwtToken.token}` }
        }).then(response => {
            dispatch({
                type: 'GET_CARD_DATA',
                payload: response.data
            })
        }).catch((error) => {
            if (error.response !== undefined) {
                message.error({ content: `Blog : ${error.response.data.message}`, key, duration: 2 })
            } else {
                message.error({ content: 'Authentication : Please check your network connection and try again.', key, duration: 2 });
            }
            return error;
        });
    };
};
export const BlogCreate = (data, authorToken) => {
    const key = 'updatable';
    return async (dispatch) => {
        return axios({
            method: 'post',
            url: `${url}/blogPost/createBlog`,
            headers: { 'Authorization': `Bearer ${JSON.parse(sessionStorage.getItem('Login')).data.jwtToken.token}` },
            data: { ...data, authorToken },
        }).then(response => {
            console.log(response, "create blog")
            dispatch({
                type: 'CREATE_NEW_BLOG',
                payload: response
            })
        }).catch((error) => {
            if (error.response !== undefined) {
                message.error({ content: `Blog : ${error.response.data.message}`, key, duration: 2 })
            } else {
                message.error({ content: 'Please check your network connection and try again.', key, duration: 2 });
            }
            return error;
        });
    };
};
const formdata = new FormData();

export const DeleteBlog = (BlogToken, authorToken) => {
    const key = 'updatable';
    formdata.append("token", BlogToken);
    formdata.append("authorToken", authorToken);
    console.log(formdata, "formdata")
    return async (dispatch) => {
        return axios({
            method: 'delete',
            url: `${url}/blogPost/delete`,
            headers: { 'Authorization': `Bearer ${JSON.parse(sessionStorage.getItem('Login')).data.jwtToken.token}` },
            params: {
                token: BlogToken,
                authorToken: authorToken
            },
        }).then(response => {
            console.log(response, "response")
            let get = store.getState().blogs.blogs
            const maindata = get.filter(p => p.BlogToken !== BlogToken)
            dispatch({
                type: 'DELETE_POST_DATA',
                payload: maindata
            })
        }).catch((error) => {
            if (error.response !== undefined) {
                message.error({ content: `Blog : ${error.response.data.message}`, key, duration: 2 })
            } else {
                message.error({ content: 'Please check your network connection and try again.', key, duration: 2 });
            }
            return error;
        });
    };
};