import React from 'react';
import { Card, CardBody } from 'reactstrap';

import FalconCardHeader from '../common/FalconCardHeader';

const UserAbout = () => {
  return (
    <Card className="mb-3">
      <FalconCardHeader title="About me" light={false} />
      <CardBody className="bg-light">
        <span className="d-block">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, nihil.</span>
        <span className="d-block mt-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam dicta magni modi molestiae, natus nesciunt obcaecati odit officia quas veritatis</span>
        <span className="d-block mt-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur deleniti ea eaque eum illo ipsum iusto minima optio quas vitae. Architecto aut commodi dolor ea, est id iste molestias numquam quasi sed temporibus, voluptate! Accusamus atque harum iste maxime repellat!</span>
      </CardBody>
    </Card>
  );
};

export default UserAbout;
