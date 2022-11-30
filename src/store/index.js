const initialState = {}

function reducer(state, action) {
    switch (action.type) {
        case 'addToBasket':
            return {
            }

        case 'removeFromBasket':
            return {
            }const initialState = { removeFrom: [] }

        case 'complete':
            return {
                ...state,
                complete: toggleComplete(state, action.payload)
            }
            
        default:
            return state;

    }
}

export { reducer, initialState };
