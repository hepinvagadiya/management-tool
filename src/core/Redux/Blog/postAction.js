import store from '../store'

// function getPostData(data) {
//     return {
//         type: 'GET_CARD_DATA',
//         payload: data
//     };
// }
// function deletePostData(data) {
//     return {
//         type: 'DELETE_POST_DATA',
//         payload: data
//     };
// }

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

export const GET = () => {
    return async (dispatch) => {
        fetch('http://10.1.1.31:3000/main.json').then((response) => response.json()).then((data) =>
            dispatch({
                type: 'GET_CARD_DATA',
                payload: data
            })
        )
    };
};
