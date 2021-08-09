import { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import { Products } from '../../data/Products'
import ItemList from './ItemList'

const ItemListContainer = () => {

    const [products, setProducts] = useState()

    const getItems = new Promise((res, rej) => {
        setTimeout(() => {
            res(Products)
        }, 2000)
    })

    getItems.then(fetchedProducts => {
        setProducts(fetchedProducts)
    })

    return(
        <Container className="mt-5">
            <Row>
                <ItemList items={products}/>
            </Row>
        </Container>
    )

}


export default ItemListContainer