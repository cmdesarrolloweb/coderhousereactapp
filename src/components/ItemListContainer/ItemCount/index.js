import React, { useState } from 'react'
import Alert from 'react-bootstrap/Alert'

const ItemCount = ({ stock , initial , onAdd }) => {

    const [contador,setContador] = useState(initial)

    // Si el contador es menor que el stock, se incrementa en 1
    const aumentarContador = () => {
        if(contador < stock) {
            setContador(contador +1)
        }
    }

    // Si el contador es mayor que 1, se decrementa 1
    const restarContador = () => {
        if(contador > 1) {
            setContador(contador - 1)
        }
    }

    // const confirmar = () => {
    //     if (stock > 0) {
    //         onAdd(contador)
    //     }
    // }

    return (

        <div className="border-1 border-white rounded text-center mb-6 pb-2">
            <div className="relative">
                <p className="alert alert-light show py-1">{contador}</p>
                <button className="absolute top-1 left-1 rounded px-3 font-bold text-black bg-gray-200 hover:bg-white" type="button" onClick={restarContador}>
                -
                </button>
                <button className=" absolute top-1 right-1 rounded px-3 font-bold text-black bg-gray-200 hover:bg-white" type="button" onClick={aumentarContador}>
                +
                </button>
            </div>
            <p className="text-xs opacity-50 mb-2">Stock: {stock}</p>
            { (stock > 0) ? 
                <button className="detail" onClick={ () => onAdd(contador)} >Agregar al carrito</button> :
                <Alert variant="warning">Producto sin stock</Alert>
            }
            {/* <Link to="/cart" onClick={confirmar}>Terminar Compra</Link> */}
            {/* <button className="btn-primary active:bg-green-500 rounded px-2" onClick={confirmar} type="button">Agregar al carrito</button> */}
        </div>
    )
}

export default ItemCount