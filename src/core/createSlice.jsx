


export default function createSlice({ name, initialState, reducers }) {
    let type = {}
    let action = {}

    for (let i in reducers) {
        let t = `${name}/${i}`
        action[i] = (data) => ({
            type: t,
            payload: data
        })

        type[i] = t
    }

    function reducer(state = initialState, action) {
        let t = action.type.split('/')?.[1]

        if (t in reducers) {
            let newState = reducers[t](state, action);
            if (typeof newState !== 'undefined') {
                return newState;
            }

            return {
                ...state
            }

        }

        return state;
    }


    return {
        reducer,
        type,
        action
    }
}