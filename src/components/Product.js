import './Product.css'

function Product ({product, dispatch}) {
    return (
        <div className='product'>
            <div className='add-container' onClick={()=>dispatch({type: 'addToBasket', payload:product})}>
                <img src={product.image} alt={product.name}></img>
                <div className='add-button'>+</div>
            </div>
            <div className='product-details' ><h4>{product.name}</h4><p>{product.price}</p></div>
            
        </div>
    )
}

export default Product