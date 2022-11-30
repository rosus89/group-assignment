import ListProducts from "../components/ListProducts"
import './Products.css'




function Products ({products}) {

    return (
            <div className="products-page">
            <ListProducts products={products} />
            </div>
    )
}

export default Products