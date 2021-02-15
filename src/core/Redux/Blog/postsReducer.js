const initState = {
    blogs: [],
};
export default (state = initState, action) => {
    switch (action.type) {
        case 'GET_BLOG_DATA':
            return (
                state = {
                    ...state,
                    blogs: action.payload.data,
                }
            )
        case 'DELETE_BLOG_DATA':
            return (
                state = {
                    ...state,
                    blogs: action.payload,
                }
            )
        case 'CREATE_NEW_BLOG':
            state = {
                ...state,
                blogs: [...state.blogs, action.payload.data],
                status: action.payload.status,
            }
        case 'UPDATE_BLOG':
            const update = [...state.blogs]
            update[action.index] = action.payload.data
            state = {
                ...state,
                blogs: update,
                UpdateStatus: action.payload.status,
            }
        case 'VIEW_BLOG':
            state = {
                ...state,
                viewBlog: action.payload.data,
                viewStatus: action.viewStatus
            }
    }
    return state;
};  