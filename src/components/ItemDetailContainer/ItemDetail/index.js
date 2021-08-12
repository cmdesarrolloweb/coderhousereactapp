import React from 'react'
import { useState } from 'react'
import CardColumns from 'react-bootstrap/CardColumns'
import Card from 'react-bootstrap/Card'
import ItemCount from '../../ItemListContainer/ItemCount'


const ItemDetail = ({item}) => {
    const [productsCart, setProductsCart] = useState(0)
    const setProductCount = (contador) => setProductsCart(productsCart + contador)

    return (
        <>
            <CardColumns>
                <Card key={item.id}>
                    <Card.Body>
                        <Card.Title><h1>{item.name}</h1>
                        </Card.Title>
                        <Card.Subtitle>{item.category}</Card.Subtitle>
                        <Card.Img variant="top" src={item.imageUrl} style={{ width: '20%', margin: 'auto', display: 'block' }} />
                        <Card.Text>ID: {item.id}</Card.Text>
                        <Card.Text>
                            {item.description}
                        </Card.Text>
                        <Card.Text>
                            <ItemCount stock={item.stock} initial={1} onAdd={setProductCount} />
                        </Card.Text>
                        <h5>$ {item.price}</h5>
                    </Card.Body>
                </Card>
            </CardColumns>
        </>
    )
}

export default ItemDetail