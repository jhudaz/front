import React from 'react';
import Loader from './loader';
import Results from './results'
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import './form.css'

function Forms() {
  return (
    <Container className="form" fluid id="home">
      <Row>
        <Col md={4}></Col>
        <Col md={4}>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label><h3>URL</h3></Form.Label>
              <Form.Control type="url" placeholder="Place your url"/>
            </Form.Group>
            <Button variant="primary" size="lg" block>
              Submit
            </Button>
          </Form>
        </Col>
        <Col md={4}></Col>
      </Row>
        <Results/>
      <Row>
        
      </Row>

    </Container>
  );
}

export default Forms;
