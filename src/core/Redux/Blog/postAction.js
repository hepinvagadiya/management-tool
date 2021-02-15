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
                type: 'GET_BLOG_DATA',
                payload: response.data
            })
        }).catch((error) => {
            if (error.response !== undefined) {
                if (error.response.status === 401) {
                    message.warning('JWT_Token is expire', 10)
                    setTimeout(() => { sessionStorage.clear(); window.location.replace("/") }, 10000);

                }
                message.error({ content: `Blog : ${error.response.data.message}`, key, duration: 2 })
            } else {
                message.error({ content: 'net::ERR_CONNECTION_TIMED_OUT', key, duration: 2 });
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
            dispatch({
                type: 'CREATE_NEW_BLOG',
                payload: response.data
            })
        }).catch((error) => {
            if (error.response !== undefined) {
                message.error({ content: `Blog : ${error.response.data.message}`, key, duration: 2 })
            } else {
                message.error({ content: 'net::ERR_CONNECTION_TIMED_OUT', key, duration: 2 });
            }
            return error;
        });
    };
};
export const updateBlog = (data, authorToken, token) => {
    const key = 'updatable';
    return async (dispatch) => {
        return axios({
            method: 'put',
            url: `${url}/blogPost/updateBlog`,
            headers: { 'Authorization': `Bearer ${JSON.parse(sessionStorage.getItem('Login')).data.jwtToken.token}` },
            data: { ...data, authorToken, token },
        }).then(response => {
            dispatch({
                type: 'UPDATE_BLOG',
                payload: response.data,
            })
            console.log(response, "response")
        }).catch((error) => {
            if (error.response !== undefined) {
                message.error({ content: `UserGroup : ${error.response.data.message}`, key, duration: 2 })
            } else {
                message.error({ content: 'Update::net::ERR_CONNECTION_TIMED_OUT', key, duration: 2 });
            }
            return error;
        });
    };
};
export const DeleteBlog = (token, authorToken) => {
    const key = 'updatable';
    return async (dispatch) => {
        return axios({
            method: 'delete',
            url: `${url}/blogPost/delete`,
            headers: { 'Authorization': `Bearer ${JSON.parse(sessionStorage.getItem('Login')).data.jwtToken.token}` },
            params: {
                token: token,
                authorToken: authorToken
            },
        }).then(response => {
            let get = store.getState().blogs.blogs
            const maindata = get.filter(p => p.token !== token)
            dispatch({
                type: 'DELETE_BLOG_DATA',
                payload: maindata
            })
        }).catch((error) => {
            if (error.response !== undefined) {
                message.error({ content: `Blog : ${error.response.data.message}`, key, duration: 2 })
            } else {
                message.error({ content: 'net::ERR_CONNECTION_TIMED_OUT', key, duration: 2 });
            }
            return error;
        });
    };
};

export const viewBlog = (token) => {
    const key = 'updatable';
    return async (dispatch) => {
        return axios({
            method: 'get',
            url: `${url}/blogPost/view-post/${token}`,
            headers: { 'Authorization': `Bearer ${JSON.parse(sessionStorage.getItem('Login')).data.jwtToken.token}` }
        }).then(response => {
            dispatch({
                type: 'VIEW_BLOG',
                payload: response.data,
                viewStatus: response.data.status
            })
        }).catch((error) => {
            if (error.response !== undefined) {
                message.error({ content: `Blog : ${error.response.data.message}`, key, duration: 2 })
            } else {
                message.error({ content: 'net::ERR_CONNECTION_TIMED_OUT', key, duration: 2 });
            }
            return error;
        });
    };
};