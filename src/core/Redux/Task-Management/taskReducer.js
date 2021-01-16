const initState = {
    TodoList: [],
};
export default (state = initState, action) => {
    switch (action.type) {
        case 'GET_TODO_DATA':
            state = {
                TodoList: action.payload,
            }
        case 'GET_PROGRESS_DATA':
            state = {
                TodoList: [...state.TodoList],
                ProgressList: action.payload,
            }
    }
    return state;
};  