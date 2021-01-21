const initState = {
    groupTable: [],
};
export default (state = initState, action) => {
    switch (action.type) {
        case 'GET_USER_GROUP_DATA':
            return (
                state = {
                    groupTable: action.payload.data,
                }
            )
            case 'FIND_USERS_DATA':
                return (
                    state = {
                        groupTable: [...state.groupTable],
                        getAllUser: action.payload.data,
                    }
                )
        case 'USER_GROUP_REGISTRATION':
            return (
                state = {
                    groupTable: [...state.groupTable, action.payload.data],
                    status: action.payload.status,
                }
            )
        case 'DELETE_USER_GROUP':
            return (
                state = {
                    groupTable: action.payload
                }
            )
        case 'FIND_USERGROUP_DATA':
            return (
                state = {
                    groupTable: [...state.groupTable],
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
                    editStatus: action.payload.status,
                }
            )
    }
    return state
};