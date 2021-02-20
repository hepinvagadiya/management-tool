const initState = {
    auth: [],
    email: [],
    otp: [],
    changePassword: [],
};
const Authentication = (state = initState, action) => {
    switch (action.type) {
        case 'FOUND_USER':
            state = {
                auth: action.payload,
            }
            break;
        case 'FORGET_PASSWORD':
            state = {
                email: action.payload,
            }
            break;
        case 'REQUEST_OTP':
            state = {
                otp: action.payload,
            }
            break;
        case 'CHANGE_PASSWORD':
            state = {
                changePassword: action.payload,
            }
            break;
        default:
            state = { ...state }
    }
    return state;
};
export default Authentication;