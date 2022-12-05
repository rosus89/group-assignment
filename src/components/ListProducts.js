import Product from "./Product";


function ListProducts ({products, dispatch}) {
    return (
        products.map(product => <Product key={product._id} product={product} dispatch={dispatch}></Product>)
    )
}

export default ListProducts