import './BasketProduct.css'

function BasketProduct ({product, dispatch}) {
    return (
        <div className='product'>
            <div className='product-details' ><h4>{product.name}</h4><p>{product.price}</p></div>
            <div className='remove' onClick={()=>dispatch({type: 'removeFromBasket', payload:product.id})}>Remove</div>
            
        </div>
    )
}

export default BasketProduct