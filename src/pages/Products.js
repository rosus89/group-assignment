import Layout from "../components/Layout"
import ListProducts from "../components/ListProducts"
import {createProducts} from "../faker"



function Products () {

    return (
        <Layout>
            <ListProducts products={createProducts(5)} />
        </Layout>
    )
}

export default Products