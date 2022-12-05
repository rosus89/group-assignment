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
                // basket: [...state.basket, addToBasket(state.basket, action.payload)]
                basket: [...state.basket, inBasket(state.basket, action.payload)]
            }
        case 'removeFromBasket':
            console.log(action.payload)
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
function inBasket (basket,value) {
    return (basket.find((item)=> item.id===value.id ) === undefined ? addToBasket(basket,value) : ),
}


function addToBasket (basket, value) {
    return {
        id: basket.length > 0 ? basket[basket.length-1].id + 1 : 1,
        ...value,
        amount:1

    }
}

export {reducer, initialState};
