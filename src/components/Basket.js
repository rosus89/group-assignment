
import "./Basket.css"
import BasketProduct from "./BasketProduct"

function Basket({basket, dispatch,display}) {
    const total = (basket)=>basket.reduce((sum, product)=>sum+parseInt(product.price.replace('£','')),0)
    console.log(total)
    return (
       <div className= {`modal ${display ? "show" : "hidden"}`}>
            <div className="modal-content">
            {basket.map(product => <BasketProduct key={product._id} product={product} dispatch={dispatch}></BasketProduct>)}
            <p>Total: £{total(basket)}</p>
            </div>

       </div>
    )
}

export default Basket