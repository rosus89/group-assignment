import './BasketProduct.css'

function BasketProduct ({product, dispatch}) {

    const toInteger = (value) => parseInt(value.replace('£',''))
    return (
        <div className='product'>
            <div className='product-details' >
                <h4>{product.name}</h4>
                <p>£{toInteger(product.price)* product.amount}</p>
                <p className='clickable' onClick={()=>dispatch({type: 'changeAmount', payload:{id:product._id,action:"decrease"}})}>-</p>
                <p>{product.amount}</p>
                <p className='clickable'onClick={()=>dispatch({type: 'changeAmount', payload:{id:product._id,action:"increase"}})}>+</p>
                </div>
            <div className='remove clickable' onClick={()=>dispatch({type: 'removeFromBasket', payload:product._id})}>Remove</div>
            
        </div>
    )
}

export default BasketProduct