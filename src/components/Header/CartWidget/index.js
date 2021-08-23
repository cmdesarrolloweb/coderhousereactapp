import { useContext } from "react"
import { contexto } from "../../Context/CartContext"
import { FaShoppingCart } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const CartWidget = () => {

    const { carrito } = useContext(contexto)

    return(
        <Link className="nav-link" to="/cart">
            <FaShoppingCart className="me-2"/>
            {carrito.length ? carrito.length : null}
        </Link>
    )
}
    

export default CartWidget