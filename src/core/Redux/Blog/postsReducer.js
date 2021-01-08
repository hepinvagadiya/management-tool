const initState = {
    blogs: [],
};
export default (state = initState, action) => {
    console.log(action, 'action')
    switch (action.type) {
        case 'GET_CARD_DATA':
            state = {
                blogs: action.payload,
            }
        case 'DELETE_POST_DATA':
            state = {
                blogs: action.payload,
            }
   }
    return state;
};