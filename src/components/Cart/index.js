import React, { useContext } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Container'
import { contexto } from '../Context/CartContext'


const Cart = () => {

    const { carrito, removeItem, clear} = useContext(contexto)

    return(
        <Container className="mt-5">
                <Row>
                    <h2>Carro de Compras</h2>
                    {carrito.map(item =>
                        <div key={item.id} id={item.item.id}>
                            {item.item.name} x {item.quantity} - ${item.item.price * item.quantity}
                            <button onClick={()=>removeItem(item.id)}>borrar</button>
                        </div>
                    )}
                    <button onClick={()=>clear()}>borrar carrito</button>
                </Row>
            </Container>
    )
}

export default Cart