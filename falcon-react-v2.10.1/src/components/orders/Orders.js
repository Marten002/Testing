import React, { Fragment, useEffect, useState } from 'react';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios'
import { orderBy } from 'lodash';
import { Button, Card, CardBody, Col, CustomInput, Form, Input, InputGroup, Row, InputGroupAddon } from 'reactstrap';

import Flex from '../common/Flex';
import Loader from '../common/Loader';
import OrdersItem from './OrdersItem';
import OrdersPagination from './OrdersPagination';

import { isIterableArray } from '../../helpers/utils';

import usePagination from '../../hooks/usePagination';

const Orders = () => {

  const [loading, setLoading] = useState(true)
  const [loadingError, setLoadingError] = useState('')
  const [orders, setOrders] = useState([])

  const [orderIds, setOrderIds] = useState([]);

  // axios get request
  useEffect(() => {
    (async () => {
      try {
        axios.get('/orders.json')
          .then(data => setOrders(data.data))
          .catch(error => setLoadingError(error))
          .finally(() => setLoading(false))
      } catch (error) {
        setLoadingError(error)
      }
    })()
  }, [])

  useEffect(() => {
    if (isIterableArray(orders) && orders) {
      setOrderIds(orders.map(order => order.id));
    }
  }, [orders, setOrderIds]);

  const { data: paginationData, meta: paginationMeta, handler: paginationHandler } = usePagination(orderIds, 6);
  const { total, itemsPerPage, from, to } = paginationMeta;
  const { perPage } = paginationHandler;

  // address: "Ricky Antony, 2392 Main Avenue, Penasauka, New Jersey 02149" //
  // amount: 99 //
  // date: "20/04/2019"
  // email: "ricky@example.com" //
  // id: "95ea19a0"
  // index: 0
  // name: "Ricky Antony" //
  // shippingType: "Via Flat Rate" //
  // status: "success" //

  const [sortBy, setSortBy] = useState('price');
  const [isAsc, setIsAsc] = useState(true);

  const handleSort = (newSortBy) => {
    setSortBy(newSortBy);
    setOrders(orderBy(orders, item => item[newSortBy], isAsc ? 'desc' : 'asc'));
    sortBy === newSortBy && setIsAsc(!isAsc);
  };

  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState(orders)

  const handleSearch = ({ target }) => {
    const value = target.value.toString().toLowerCase();
    setSearchTerm(value)
  }

  useEffect(() => {
    const results = orders.filter(item => item.name.toString().toLowerCase().includes(searchTerm))
    setSearchResults(results)
  }, [searchTerm, orders])

  return (
    <Fragment>
      <Card className="mb-3">
        <CardBody className="bg-light">
          <Row className="justify-content-between align-items-center">
            <Col sm="auto" className="mb-2 mb-sm-0 w-auto" tag={Flex} align="center">
              <CustomInput
                id="itemsPerPage"
                className="order-1 order-sm-1 order-md-0"
                type="select"
                bsSize="sm"
                value={itemsPerPage}
                onChange={({ target }) => perPage(Number(target.value))}
              >
                <option value={6}>6</option>
                <option value={12}>12</option>
                <option value={20}>20</option>
                <option value={total}>All</option>
              </CustomInput>
              <h6 className="mb-0 text-nowrap ml-md-2 ml-sm-0 mr-sm-2 mr-2 order-0 order-sm-0 order-md-1">
                Showing {from}-{to} of {total} Products
              </h6>
            </Col>
            <Col sm="auto" className="mt-3 mt-md-0">
              <Form className="d-inline-block mr-3">
                <InputGroup size="sm" tag={Flex} align="center">
                  <small className="mr-1">Sort by:</small>
                  <CustomInput
                    type="select"
                    defaultValue={sortBy}
                    id="OrdersSortBy"
                    onChange={({ target }) => handleSort(target.value)}
                  >
                    <option value="amount">Price</option>
                    <option value="date">Date</option>
                    <option value="status">Status</option>
                    <option value="shippingType">Shipping type</option>
                  </CustomInput>
                  <InputGroupAddon addonType="append">
                    <Button onClick={() => handleSort(sortBy)} className="cursor-pointer">
                      <FontAwesomeIcon icon={classNames({ 'sort-amount-up': isAsc, 'sort-amount-down': !isAsc })} />
                    </Button>
                  </InputGroupAddon>
                </InputGroup>
              </Form>
            </Col>
          </Row>
        </CardBody>
      </Card>
      <Card className="mb-3">
        <CardBody className="bg-light">
          <Input bsSize="md" placeholder="Search..." onChange={handleSearch} />
        </CardBody>
      </Card>
      {
        loading
        ? <Loader />
        : isIterableArray(searchResults) && searchResults
          .filter(order => paginationData.includes(order.id))
          .map((order, index) => <OrdersItem key={order.id} {...order} index={index} />)
      }
      {
        !loading && loadingError && (
        <h6 className="text-nowrap font-weight-bold text-center">
          {loadingError}
        </h6>
        )
      }
      <Card className="mb-3">
        <OrdersPagination meta={paginationMeta} handler={paginationHandler} />
      </Card>
    </Fragment>
  );
};

export default Orders;
