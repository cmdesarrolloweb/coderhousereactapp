import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const ItemListContainer = ({greeting}) =>

    <Container className="mt-5">
        <Row>
            <Col xs={3}>{greeting}</Col>
            <Col xs={3}>{greeting}</Col>
            <Col xs={3}>{greeting}</Col>
            <Col xs={3}>{greeting}</Col>
        </Row>
    </Container>

export default ItemListContainer