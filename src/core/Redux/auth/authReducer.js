const initState = {
    auth: [],
    email: [],
    otp: [],
    changePassword: [],
};
export default (state = initState, action) => {
    switch (action.type) {
        case 'FOUND_USER':
            return (
                state = {
                    auth: action.payload,
                }
            );
        case 'FORGET_PASSWORD':
            return (
                state = {
                    email: action.payload,
                }
            );
        case 'REQUEST_OTP':
            return (
                state = {
                    otp: action.payload,
                }
            );
        case 'CHANGE_PASSWORD':
            return (
                state = {
                    changePassword: action.payload,
                }
            );
    }
    return state;
};  