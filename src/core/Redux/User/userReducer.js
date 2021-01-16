const initState = {
    table: [],
};
export default (state = initState, action) => {
    switch (action.type) {
        case 'GET_USER_DATA':
            return (
                state = {
                    table: action.payload.data,
                }
            )
        case 'USER_REGISTRATION':
            return (
                state = {
                    table: [...state.table, action.payload.data]
                }
            )
        case 'DELETE_USER':
            return (
                state = {
                    table: action.payload
                }
            )
        case 'FIND_USER_DATA':
            return (
                state = {
                    table: [...state.table],
                    findUser: action.payload.data
                }
            )
    }
    return state
};