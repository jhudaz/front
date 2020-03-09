import React from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import './form.css'

function Forms() {
  return (
    <Container className="form" fluid id="formComponent">
      <Row>
        <Col md={4}></Col>
        <Col md={4}>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Url</Form.Label>
              <Form.Control type="url" placeholder="Place your url"/>
              <Form.Text className="text-muted">
                Paste the url 
              </Form.Text>
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
        <Col md={4}></Col>
      </Row>

    </Container>
  );
}

export default Forms;
