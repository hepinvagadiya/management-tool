const initState = {
    groupTable: [],
    getAllUser: []
};
const UserGroup = (state = initState, action) => {
    switch (action.type) {
        case 'GET_USER_GROUP_DATA':
            state = {
                ...state,
                groupTable: action.payload.data,
            }
            break;
        case 'GET_USERS_DATA':
            state = {
                ...state,
                getAllUser: action.payload.data,
            }
            break;
        case 'USER_GROUP_REGISTRATION':
            state = {
                ...state,
                groupTable: [...state.groupTable, action.payload.data],
                status: action.payload.status,
            }
            break;
        case 'DELETE_USER_GROUP':
            state = {
                ...state,
                groupTable: action.payload,
                delStatus: action.delStatus
            }
            break;
        case 'FIND_USERGROUP_DATA':
            state = {
                ...state,
                findStatus: action.payload.data.status,
                findUserGroup: action.payload.data,
            }
            break;
        case 'USER_GROUP_UPDATE':
            // eslint-disable-next-line no-case-declarations
            const maintable = [...state.groupTable]
            maintable[action.index] = action.payload.data
            state = {
                groupTable: maintable,
                getAllUser: [...state.getAllUser],
                editStatus: action.payload.status,
            }
            break;
        default:
            state = { ...state }
    }
    return state
};
export default UserGroup;