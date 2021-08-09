import { useState } from 'react';
import { Card } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import ItemCount from '../ItemCount';


const Item = ({product}) => {
    const priceFormat = new Intl.NumberFormat('es-AR', { style: 'decimal' });

    const [productsCart, setProductsCart] = useState(0)
    const setProductCount = (contador) => setProductsCart(productsCart + contador)

    return (
        <Col xs={3}>
            <Card key={product.id} style={{ width: '18rem' }}>
                <Card.Img variant="top" src={product.imageUrl} />
                <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>
                    $ {priceFormat.format(product.price)}
                    <ItemCount stock={product.stock} initial={1} onAdd={setProductCount} />
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default Item