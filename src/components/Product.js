function Product ({name, image, price}) {
    return (
        <div>
            <h4>{name}</h4>
            <img src={image} alt={name}></img>
            <p>{price}</p>
        </div>
    )
}

export default Product