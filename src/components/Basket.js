
import "./Basket.css"
import BasketProduct from "./BasketProduct"


function Basket({basket, dispatch,modal}) {

    const total = (basket)=>basket.reduce((sum, product)=>sum+parseInt(product.price.replace('£','')) *product.amount,0)
    return (
       <div className= {`modal ${modal ? "show" : "hidden"}`}>
            <div className="modal-content">
            {basket.map(product => <BasketProduct key={product._id} product={product} dispatch={dispatch}></BasketProduct>)}
            <p>Total: £{total(basket)}</p>
            <button onClick={()=>dispatch({type:"toggleBasket"})}>Close</button>
            </div>

       </div>
    )
}

export default Basket