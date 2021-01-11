const initState = {
    table: [],
};
export default (state = initState, action) => {
    switch (action.type) {
        case 'GET_USER_DATA':
            state = {
                table: action.payload,
            }
    }
    return state;
};