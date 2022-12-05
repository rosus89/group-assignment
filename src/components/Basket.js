
import "./Basket.css"
import BasketProduct from "./BasketProduct"

function Basket({basket, dispatch,display}) {
    return (
       <div className= {`modal ${display ? "show" : "hidden"}`}>
            <div className="modal-content">
            {basket.map(product => <BasketProduct key={product.id} product={product} dispatch={dispatch}></BasketProduct>)}
            </div>

       </div>
    )
}

export default Basket