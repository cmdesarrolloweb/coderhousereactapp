import { Card } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const Item = ({product}) => {
    const priceFormat = new Intl.NumberFormat('es-AR', { style: 'decimal' });

    return (
        <Col lg={4}>
            <Card key={product.id}>
                <Card.Img variant="top" src={product.imageUrl} />
                <Card.Body>
                    <Card.Title>
                    <Link to={`/producto/${product.id}`}>
                        {product.name}
                    </Link>
                    </Card.Title>
                    <Card.Text>
                    $ {priceFormat.format(product.price)}
                    {/* <ItemCount stock={product.stock} initial={1} onAdd={setProductCount} /> */}
                    </Card.Text>
                    <Card.Text>
                    {product.category}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default Item