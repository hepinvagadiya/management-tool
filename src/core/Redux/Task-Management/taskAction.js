
export const toDo = () => {
    return async (dispatch) => {
        fetch('http://10.1.1.31:3000/TodoList.json').then((response) => response.json()).then((data) =>
            dispatch({
                type: 'GET_TODO_DATA',
                payload: data,
            })
        )
    };
};

export const progress = () => {
    return async (dispatch) => {
        fetch('http://10.1.1.31:3000/Progress.json').then((response) => response.json()).then((data) =>
            dispatch({
                type: 'GET_PROGRESS_DATA',
                payload: data,
            })
        )
    };
};