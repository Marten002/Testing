import React from 'react';
import { Card, CardBody, Col, Row } from 'reactstrap';

import FalconCardHeader from '../common/FalconCardHeader';

import useFakeFetch from '../../hooks/useFakeFetch';
import Loader from '../common/Loader';
import Member from '../page/Member';

import { isIterableArray } from '../../helpers/utils';

const UserFriends = ({ friends: friendsProp }) => {

  const { loading: loadingFriends, data: friends } = useFakeFetch(friendsProp);

  return (
    <Card className="mb-3">
      <FalconCardHeader title="Friends" light={false} />
      <CardBody className="bg-light pt-3">
        <Row noGutters className="text-center fs--1">
          {
            loadingFriends
            ? <Loader />
            : isIterableArray(friends) && friends.map((friend, index) => {
              return (
                <Col className="col-12 col-md-4 col-sm-12 flex-center mt-2 px-1" key={index}>
                  <Member {...friend} />
                </Col>
              )
            })
          }
        </Row>
      </CardBody>
    </Card>
  );
};

export default UserFriends;
