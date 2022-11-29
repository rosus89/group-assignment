import Product from "./Product";




function ListProducts ({products}) {
    return (
        products.map(product => <Product name={product.name} image={product.image} price={product.price}></Product>)
    )
}

export default ListProducts