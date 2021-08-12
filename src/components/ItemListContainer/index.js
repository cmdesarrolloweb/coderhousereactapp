import { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import { Products } from '../../data/Products'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
import Spinner from 'react-bootstrap/Spinner'

const ItemListContainer = () => {

    const [products, setProducts] = useState([])
    const [estado, setEstado] = useState("pendiente");
    const params = useParams()

    useEffect(() => {
    const getItems = new Promise((res, rej) => {
        setTimeout(() => {
            if(params.category) {
                res(Products.filter(producto => producto.category === params.category))
            }else{
                res(Products)
            }
        }, 2000)
        setEstado("pendiente")
    })
    getItems.then((fetchedProducts) => 
        setProducts(fetchedProducts))
        .then(() => setEstado("terminado"))
    }, [params.category])

    if (estado === "pendiente") {
        return(
            <Container className="mt-5">
                <Row>
                    <Spinner animation="border" role="status" className="d-block m-auto" >
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </Row>
            </Container>
        )
    } else{

        return(
            <Container className="mt-5">
                <Row>
                    <ItemList items={products}/>
                </Row>
            </Container>
        )
    }

}


export default ItemListContainer