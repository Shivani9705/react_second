import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap'

const File2 = () => {
    return (
        <div>
            <Container >
                <Row>
                    <Col sm={3} md={6} lg={12} className='bg-success variant-light'>
                        Hello world
                    </Col>
                    <Col sm={3} md={6} lg={12} className='bg-warning'>
                        Hello world
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default File2;
