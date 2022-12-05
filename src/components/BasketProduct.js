import './BasketProduct.css'

function BasketProduct ({product, dispatch}) {
    return (
        <div className='product'>
            <div className='product-details' ><h4>{product.name}</h4><p>{product.price}</p><p>{product.amount}</p></div>
            <div className='remove' onClick={()=>dispatch({type: 'removeFromBasket', payload:product._id})}>Remove</div>
            
        </div>
    )
}

export default BasketProduct