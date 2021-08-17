import React, { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Spinner from 'react-bootstrap/Spinner'
import { Products } from '../../data/Products'
import ItemDetail from "./ItemDetail"
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {

    const [products, setProducts] = useState([])
    const [estado, setEstado] = useState("pendiente");
    const params = useParams()

    console.log(params)
    console.log(typeof params.id)
    
    useEffect(() => {
        const getItem = new Promise((res, rej) => {
            setTimeout(() => {
                if(params.id) {
                    res(Products.find(producto => producto.id.toString() === params.id))
                }else{
                    res(console.log("No se encontro producto buscado"))
                }
            }, 2000)
            setEstado("pendiente")
        })
        getItem.then((data_product) =>
            setProducts(data_product))
            .then(() => setEstado("terminado"))
    }, [params.id])

    if (estado === "pendiente") {
        return(

            <Container className="mt-5">
                <Row>
                    <h4>Detalle de Producto:</h4>
                    <Spinner animation="border" role="status" className="d-block m-auto" >
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </Row>
            </Container>
        )
    } else {
        return (
            <Container className="mt-5">
                <Row>
                    <h4>Detalle de Producto:</h4>
                    <ItemDetail item={products} />
                </Row>
            </Container>
        )
    }

}

export default ItemDetailContainer