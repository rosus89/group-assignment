import './Product.css'

function Product ({name, image, price}) {
    return (
        <div className='product'>
            <div className='add-container'>
                <img src={image} alt={name}></img>
                <div className='add-button'>+</div>
            </div>
            <div className='product-details' ><h4>{name}</h4><p>{price}</p></div>
            
        </div>
    )
}

export default Product