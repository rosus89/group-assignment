import { createProducts } from "../faker"

function Home () {
    console.log(createProducts(5))
    return (<div>Homepage</div>)
}

export default Home