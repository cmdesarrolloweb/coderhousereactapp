import React, { useState } from 'react'
import CardColumns from 'react-bootstrap/CardColumns'
import Card from 'react-bootstrap/Card'
import ItemCount from '../../ItemListContainer/ItemCount'
import { Link } from "react-router-dom";


const ItemDetail = ({item}) => {

    let initial;
    if (item.stock === 0){
        initial = 0
    } else {
        initial = 1
    }

    // const [productsCart, setProductsCart] = useState(0)
    // const setProductCount = (contador) => setProductsCart(productsCart + contador)

    let [terminarCompra, setTerminarCompra] = useState ("")

    // la funcion onAdd que viene del ItemCount cambia el estado  de "terminarCompra" para crear el boton de finalizar y asi ir a /carrito
    const onAdd = (quantityToAdd) => {
            setTerminarCompra(<Link to={`/cart`} className="btn btn-success">Terminar la compra de {quantityToAdd} {item.name}</Link>);
    }

        return (

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
                                <ItemCount stock={item.stock} initial={initial} onAdd={onAdd} />
                                <div className="text-center">{terminarCompra}</div>
                            </Card.Text>
                            <h5>$ {item.price}</h5>
                        </Card.Body>
                    </Card>
                </CardColumns>
            
        )

}

export default ItemDetail