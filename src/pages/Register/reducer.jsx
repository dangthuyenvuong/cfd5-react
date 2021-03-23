export default function reducer(state, action) {
    switch (action.type) {

        case 'INPUT_CHANGE':
            return {
                ...state,
                form: action.payload
            }
        case 'SET_ERROR':
            return {
                ...state,
                error: action.payload
            }
    }

    return state;
}