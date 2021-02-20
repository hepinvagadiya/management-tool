const initState = {
    blogs: [],
};
const Blog = (state = initState, action) => {
    switch (action.type) {
        case 'GET_BLOG_DATA':
            state = {
                ...state,
                blogs: action.payload.data,
            }
            break;
        case 'DELETE_BLOG_DATA':
            state = {
                ...state,
                blogs: action.payload,
            }
            break;
        case 'CREATE_NEW_BLOG':
            state = {
                ...state,
                blogs: [...state.blogs, action.payload.data],
                status: action.payload.status,
            }
            break;
        case 'UPDATE_BLOG':
            // eslint-disable-next-line no-case-declarations
            const update = [...state.blogs]
            update[action.index] = action.payload.data
            state = {
                ...state,
                blogs: update,
                UpdateStatus: action.payload.status,
            }
            break;
        case 'VIEW_BLOG':
            state = {
                ...state,
                viewBlog: action.payload.data,
                viewStatus: action.viewStatus
            }
            break;
        default:
            return state;
    }
    return state;
};
export default Blog;