import {createContext, useState} from 'react'

export const contexto = createContext()

const { Consumer, Provider } = contexto


const CustomProvider = ({children}) => {
    
    const [carrito, setCarrito] = useState([])

    const addItem = (item) => {
        
        // const copia = carrito.slice(0)
        // copia.push(item)
        // setCarrito(copia)

        setCarrito([...carrito, item])
    }

    const removeItem = (itemId) => {
        setCarrito(carrito.filter( item => item.item.id !== itemId));
        console.log(`Se eliminaron todos los productos con id: ${itemId}`)
    }

    const clear = () => {
        setCarrito([]);
        console.log(`Se borraron todos los productos`)
    }

    const isInCart = (i) => {
        return carrito.find(item => item.id === i)
    }

    const contexto_para_consumir = {carrito, setCarrito, addItem, removeItem, clear, isInCart}

    return (
        <Provider value={contexto_para_consumir}>
            {children}
        </Provider>
    )
}

export default CustomProvider