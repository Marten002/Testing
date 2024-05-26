import React from 'react';
import { Button, Card, CardBody, CardFooter, Col, Container, Row } from 'reactstrap';
import { Link } from 'react-router-dom';

import FalconCardHeader from '../common/FalconCardHeader';

import imageCorner from '../../assets/img/illustrations/authentication-corner.png'

const OrdersItemTitle = (id) => {
  return (
    <Link
      to={{
        pathname: `/orders/orders-detail/${id}`,
        state: { id: id }
      }}
    >
      Order #{id}
    </Link>
  )
}

const OrdersItem = (props) => {

  const { address, amount, date, email, id, name, shippingType, status } = props

  const statusesBlock = ['hold', 'pending', 'processing']

  return (
    <Card className="mb-3">
      <FalconCardHeader title={OrdersItemTitle(id)} light={false} />
      <CardBody style={{backgroundImage: `url(${imageCorner})`}} className="bg-light orders-image">
        <Row noGutters>
          <Col sm={12} md={6} lg={6}>
            <Container className="flex-column p-0">
              <h5 className="mt-3 mt-sm-0 text-dark fs-0 fs-lg-1">
                {name}
              </h5>
              <p className="fs--1 mb-2 mb-md-3 text-50011">
                <a href={`mailto:${email}`}>{email}</a>
              </p>
            </Container>
          </Col>
          <Col sm={12} md={6} lg={6}>
            <Container className="flex-column p-0">
              <h5 className="fs-1 fs-md-2 text-warning mb-0 text-right">${amount}</h5>
              <p className="fs--1 mb-1 text-right">Status: <strong className={`orders-status--${status}`}>{status}</strong></p>
              <p className="fs--1 mb-1 text-right">Shipping type: <strong>{shippingType}</strong></p>
              <p className="fs--1 mb-1 text-right">Shipping address: <strong>{address}</strong></p>
              <p className="fs--1 mb-1 text-right">Date: <strong>{date}</strong></p>
            </Container>
          </Col>
        </Row>
      </CardBody>
      <CardFooter>
        <Row className="p-0 justify-content-end">
          {
            !statusesBlock.includes(status) && (
              <Col col={12} sm={4} md={3} lg={2}>
                <Button color="primary" block className="btn-sm mt-0">
                  Refund
                </Button>
              </Col>
            )
          }
          <Col col={12} sm={4} md={3} lg={2} className={`mt-sm-0 ${!statusesBlock.includes(status) && 'mt-3'}`}>
            <Button color="warning" block className="btn-sm mt-0">
              Support
            </Button>
          </Col>
          {
            status === 'success' && (
              <Col col={12} sm={4} md={3} lg={2} className="mt-3 mt-sm-0">
                <Button color="success" block className="btn-sm mt-0">
                  Print check
                </Button>
              </Col>
            )
          }
        </Row>
      </CardFooter>
    </Card>
  );
};

export default OrdersItem;
