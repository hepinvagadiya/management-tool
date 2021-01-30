const initState = {
    blogs: [],
};
export default (state = initState, action) => {
    switch (action.type) {
        case 'GET_CARD_DATA':
            state = {
                blogs: action.payload.data,
            }
        // case 'CREATE_NEW_BLOG':
        //     state = {
        //         blogs: [...state.blogs, action.payload.data],
        //         status: action.payload.status,
        //     }
        // case 'DELETE_POST_DATA':
        //     state = {
        //         blogs: action.payload,
        //     }
    }
    return state;
};  