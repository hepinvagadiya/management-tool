const initState = {
    blogs: [],
};
export default  (state = initState, action) => {
    switch (action.type) {
        case 'GET_CARD_DATA':
            state = {
                blogs: action.payload,
            }
    }
    return state;
};