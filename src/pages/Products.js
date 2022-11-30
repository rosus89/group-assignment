import ListProducts from "../components/ListProducts"
import './Products.css'




function Products ({products, dispatch}) {

    return (
            <div className="products-page">
            <ListProducts products={products} dispatch={dispatch} />
            </div>
    )
}

export default Products