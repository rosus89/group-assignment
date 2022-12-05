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
                 basket:addToBasket(state, action.payload)
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



function addToBasket (state, product) {

    if (state.basket.find((item)=> item._id===product._id )){
         return state.basket.map(item => {
            if(item._id===product._id)
            {
                return {...item, amount:item.amount+1}
            }
            else {
                return item
            }
         })
    }
    else{
        return [...state.basket,{...product,amount:1}]
        


        
    }
}

export {reducer, initialState};
