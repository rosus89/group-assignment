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
            }const initialState= {removeFrom:[]}

            function reducer (state, action) {
                switch (action.type) {
                    case 'add':
                        return {
                            ...state,
                            addTo: [...state.addTo, createAddTo(state,action.payload)]
                        }
                    case 'remove':
                        return {
                            ...state,
                            removeFrom: state.removeFrom.filter(removeFrom => removeFrom.id !== action.payload)
                        };
                    case 'complete':
                        return {
                            ...state,
                            complete: toggleComplete(state, action.payload)
                        }
                    default:
                        return state;
                
                }
            }
            
            function addTo (state, value) {
                return {
                    id: state.addTo.length > 0 ? state.addTo[state.addTo.length-1].id + 1 : 1,
                    value,
                    complete: false }
            }
            
            const toggleAddTo = (state, id) => state.addTo.map( addTo => addTo.id === id ? {...addTo, complete:!addTo.complete} : addTo)
            
            
            
            export {reducer, initialState};
        default:
            return state;
    
    }
}



export {reducer, initialState};
