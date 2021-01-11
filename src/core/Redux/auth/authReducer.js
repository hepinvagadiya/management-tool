const initState = {
    auth: [],
};
export default (state = initState, action) => {
    switch (action.type) {
        case 'FOUND_USER':
            state = {
                auth: action.payload,
            }

        case 'ERROR_FINDING_USER':
            state = {
                auth: action.payload,
            }
    }
    return state;
};  