import { Card, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'



const Item = ({product}) => {
    const priceFormat = new Intl.NumberFormat('es-AR', { style: 'decimal' });

    return (
        <Col lg={4}>
            <Link to={`/producto/${product.id}`}>
                <Card key={product.id}>
                    <Card.Img variant="top" src={product.imageUrl} />
                    <Card.Body>
                        <Card.Title>
                            {product.name}
                        </Card.Title>
                        <Card.Text>
                        $ {priceFormat.format(product.price)}
                        {/* <ItemCount stock={product.stock} initial={1} onAdd={setProductCount} /> */}
                        </Card.Text>
                        <Card.Text>
                        {product.category}
                        </Card.Text>
                        <Link to={`/producto/${product.id}`}><Button variant="primary">Ver Detalle</Button></Link>
                    </Card.Body>
                </Card>
            </Link>
        </Col>
    )
}

export default Item