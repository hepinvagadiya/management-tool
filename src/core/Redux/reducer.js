const initialState = []

export default function appReducer(state = initialState, action) {
    switch (action.type) {
        case 'GET_DATA_ARRAY': {
            console.log(action.payload, 'pay')
            return {
                initialState: action.payload
            }
        } 
        default:
            return state
    }
}