import Layout from "../components/Layout"
import ListProducts from "../components/ListProducts"
import './Products.css'
import {createProducts} from "../faker"



function Products () {

    return (
        <Layout>
            <div className="products-page">
            <ListProducts products={createProducts(9)} />
            </div>
        </Layout>
    )
}

export default Products