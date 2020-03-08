import React from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';


function Forms() {
  return (
    <Container className="form">
      <Row>
        <Col></Col>
        <Col>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Url</Form.Label>
              <Form.Control type="url" placeholder="Place your url"/>
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
        <Col></Col>
      </Row>

    </Container>
  );
}

export default Forms;
