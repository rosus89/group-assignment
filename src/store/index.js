const initialState= {}

// will probably use this later
// State changing actions go here 
// more info here https://reactjs.org/docs/hooks-reference.html#usereducer

function reducer (state, action) {
    switch (action.type) {
        case 'addToBasket':
            return {
            }
        case 'removeFromBasket':
            return {
            }
        default:
            return state;
    
    }
}



export {reducer, initialState};
