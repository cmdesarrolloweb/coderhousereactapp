import React, { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import ItemDetail from "./ItemDetail"

const ItemDetailContainer = () => {

    const [producto, setProducto] = useState([])
    
    useEffect(() => {
        const getItem = new Promise((res, rej) => {
            setTimeout(() => {
                const pedido = fetch('https://fakestoreapi.com/products/1')
                pedido.then((respuesta) => {
                    return respuesta.json()
                })
                    .then((transformacion) => {
                        res(transformacion)
                    })
            }, 2000)
        })
        getItem.then((data_product) => {
            setProducto(data_product)
        })
    }, [])
    console.log(producto)

    return (
        <Container className="mt-5">
            <Row>
                <h5>Item Detail</h5>
                <ItemDetail item={producto} />
            </Row>
        </Container>
    )
}

export default ItemDetailContainer