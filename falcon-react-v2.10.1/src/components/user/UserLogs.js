import React from 'react';
import { Card, CardBody, Col, Container, Row } from 'reactstrap';

import Loader from '../common/Loader';
import FalconCardHeader from '../common/FalconCardHeader';
import FalconProgress from '../common/FalconProgress';

import { isIterableArray } from '../../helpers/utils';

import useFakeFetch from '../../hooks/useFakeFetch';

const UserLogs = ({ invoice: invoiceProp }) => {

  const { loading: loadingInvoice, data: { products } } = useFakeFetch(invoiceProp);

  return (
    <Card>
      <FalconCardHeader title="Invoices product" light={false} />
      <CardBody className="bg-light pt-3">
        {
          loadingInvoice
          ? <Loader />
          : isIterableArray(products) && products.map((product, index) => {
            return (
              <Row key={index} noGutters className="text-center fs--1">
                <Col className="flex-center mt-2 px-1">
                  <div className="bg-white p-3 h-100 d-flex align-items-center flex-sm-row flex-column">
                    <Container className="flex-column">
                      <h6 className="font-weight-bold">
                        {product.name}
                      </h6>
                      <p className="mb-0">
                        {product.description}
                      </p>
                    </Container>
                    <Container className="flex-column d-flex justify-content-between h-100">
                      <span className="d-block font-weight-normal mb-2">Rate</span>
                      <span className="fs-4 font-weight-normal text-sans-serif text-primary mb-1 line-height-1">{product.rate}</span>
                    </Container>
                    <Container className="flex-column d-flex justify-content-between h-100">
                      <span className="d-block font-weight-normal mb-2 position-relative">Quantity</span>
                      <FalconProgress
                        value={product.quantity}
                        color="primary"
                        style={{ height: '5px' }}
                        className="w-100 rounded-soft bg-200 mb-3"
                      />
                    </Container>
                  </div>
                </Col>
              </Row>
            )
          })
        }
      </CardBody>
    </Card>
  );
};

export default UserLogs;
