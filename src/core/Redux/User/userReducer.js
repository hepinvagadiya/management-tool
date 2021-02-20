const initState = {
    table: [],
};
const user = (state = initState, action) => {
    switch (action.type) {
        case 'GET_USER_DATA':
            state = {
                ...state,
                table: action.payload.data,
            }
            break;
        case 'USER_REGISTRATION':
            state = {
                table: [...state.table, action.payload.data],
                status: action.payload.status,
            }
            break;
        case 'DELETE_USER':
            state = {
                ...state,
                table: action.payload,
                delStatus: action.delStatus
            }
            break;
        case 'FIND_USER_DATA':
            state = {
                table: [...state.table],
                findUser: action.payload.data,
                findStatus: action.findStatus
            }
            break;
        case 'USER_UPDATE':
            // eslint-disable-next-line no-case-declarations
            const maintable = [...state.table]
            maintable[action.index] = action.payload.data
            state = {
                table: maintable,
                editStatus: action.payload.status,
            }
            break;
        default:
            return state
    }
    return state
};

export default user;