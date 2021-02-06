const initState = {
    blogs: [],
};
export default (state = initState, action) => {
    switch (action.type) {
        case 'GET_CARD_DATA':
            return (
                state = {
                    blogs: action.payload.data,
                }
            )
        case 'DELETE_POST_DATA':
            return (
                state = {
                    blogs: action.payload,
                }
            )
        case 'CREATE_NEW_BLOG':
            state = {
                blogs: [...state.blogs, action.payload.data],
                status: action.payload.status,
            }
    }
    return state;
};  