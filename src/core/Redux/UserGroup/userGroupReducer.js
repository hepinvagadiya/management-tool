const initState = {
    groupTable: [],
    getAllUser: []
};
export default (state = initState, action) => {
    switch (action.type) {
        case 'GET_USER_GROUP_DATA':
            return (
                state = {
                    ...state,
                    groupTable: action.payload.data,
                }
            )
        case 'GET_USERS_DATA':
            return (
                state = {
                    ...state,
                    getAllUser: action.payload.data,
                }
            )
        case 'USER_GROUP_REGISTRATION':
            return (
                state = {
                    ...state,
                    groupTable: [...state.groupTable, action.payload.data],
                    status: action.payload.status,
                }
            )
        case 'DELETE_USER_GROUP':
            return (
                state = {
                    ...state,
                    groupTable: action.payload,
                    delStatus: action.delStatus
                }
            )
        case 'FIND_USERGROUP_DATA':
            return (
                state = {
                    ...state,
                    findStatus: action.payload.data.status,
                    findUserGroup: action.payload.data,
                }
            )
        case 'USER_GROUP_UPDATE':
            const maintable = [...state.groupTable].slice();
            maintable[action.index] = action.payload.data
            return (
                state = {
                    groupTable: maintable,
                    getAllUser: [...state.getAllUser],
                    editStatus: action.payload.status,
                }
            )
    }
    return state
};