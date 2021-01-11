export const GET = () => {
    return async (dispatch) => {
        fetch('http://10.1.1.31:3000/UserData.json').then((response) => response.json()).then((userdata) =>
            dispatch({
                type: 'GET_USER_DATA',
                payload: userdata,
            })
        )
    };
};
