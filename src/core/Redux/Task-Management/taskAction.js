
export const ProgressData = () => {
    return async (dispatch) => {
        fetch('http://10.1.1.31:3000/Progress.json').then((response) => response.json()).then((data) =>
            dispatch({
                type: 'GET_PROGRESS_DATA',
                payload: data,
            })
        )
    };
};
