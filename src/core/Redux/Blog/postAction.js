export const GET = () => {
    return async (dispatch) => {
        fetch('http://localhost:3000/main.json').then((response) => response.json()).then((data) =>
            dispatch({
                type: 'GET_CARD_DATA',
                payload: data,
            })
        )
    };
};