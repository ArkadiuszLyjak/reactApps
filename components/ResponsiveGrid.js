// src/components/ResponsiveGrid.js
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function ResponsiveGrid() {
  return (
    <Container>
      <Row>
        <Col xs={12} sm={6} md={4} lg={3} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title>Field 1</Card.Title>
              <Card.Text>
                Content for field 1.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={4} lg={3} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title>Field 2</Card.Title>
              <Card.Text>
                Content for field 2.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={4} lg={3} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title>Field 3</Card.Title>
              <Card.Text>
                Content for field 3.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={4} lg={3} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title>Field 4</Card.Title>
              <Card.Text>
                Content for field 4.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default ResponsiveGrid;
