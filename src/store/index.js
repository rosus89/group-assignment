const initialState= {   
                        productsLoaded:false,
                        products:[],
                        basket:[],
                        modal:false
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
                basket: state.basket.filter(item => item._id !== action.payload)
            }
        case 'getProducts':
            return {
                ...state,
                products: action.payload,
                productsLoaded: true
            }
        case 'changeAmount':
            return {
                ...state,
                basket:changeAmount(state, action.payload.id, action.payload.action)
            }
        case 'toggleBasket':
            console.log("triggered")
            return {
                ...state,
                modal:!state.modal
            }

        default:
            return state;
    
    }
}

function changeAmount (state, id, action){
    return state.basket.map(item => {
        if(item._id===id && action === "increase")
        {
            return {...item, amount:item.amount+1}
        }
        if (item._id===id && action === "decrease"){
            return {...item, amount:item.amount-1}
        }
        else  {
            return item
        }
     })
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
