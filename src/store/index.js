const initialState= {   
                        productsLoaded:false,
                        products:[],
                        basket:[]
                    }

// will probably use this later
// State changing actions go here 
// more info here https://reactjs.org/docs/hooks-reference.html#usereducer

function reducer (state, action) {
    switch (action.type) {
        case 'addToBasket':
            return {
                ...state,
                basket: [...state.basket, action.payload]
            }
        case 'removeFromBasket':
            return {
                ...state,
                basket: state.basket.filter(item => item.id === action.payload)
            }
        case 'getProducts':
            return {
                ...state,
                products: action.payload,
                productsLoaded: true
            }
        default:
            return state;
    
    }
}



export {reducer, initialState};
