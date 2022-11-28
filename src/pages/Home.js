import { createProducts } from "../faker"
import Layout from "../components/Layout"

function Home () {
    console.log(createProducts(5))
    return (
        <Layout>
            <div>Homepage</div>
        </Layout>
    )
}

export default Home