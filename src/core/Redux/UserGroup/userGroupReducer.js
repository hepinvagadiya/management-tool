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
        case 'FIND_USERGROUP_DATA':
            return (
                state = {
                    groupTable: [...state.groupTable],
                    findUserGroup: action.payload.data
                }
            )
    }
    return state
};