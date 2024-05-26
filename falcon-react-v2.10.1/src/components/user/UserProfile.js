import React from 'react';
import { Button, Card, CardHeader, Col, Container, Media, Row } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

import Avatar from '../common/Avatar';

import team2 from '../../assets/img/team/5.jpg';

const UserProfile = () => {
  return (
    <Card className="mb-3">
      <CardHeader className="position-relative min-vh-25 p-5 d-flex flex-sm-row align-items-center align-items-sm-baseline flex-column">
        <Avatar
          src={team2}
          width={200}
          size="5xl"
          rounded="circle"
          className=" avatar-user"
          mediaClass="img-thumbnail shadow-sm"
        />
        <Container className="flex-column ml-sm-10 ml-0 mt-sm-0 mt-3">
          <Media>
            <Media body className="position-relative pl-0 pl-sm-3 btn-reveal-trigger">
              <h6 className="fs-0 mb-0 d-flex justify-content-between align-items-start">
                  <span className="w-sm-auto w-100 text-sm-left text-center">
                    Martin Taylor
                  </span>
              </h6>
              <p className="mb-1 d-sm-inline d-flex justify-content-sm-start justify-content-center">
                <Link to={''}>Front-End developer</Link>
              </p>
              <hr className="border-dashed border-bottom-0" />
            </Media>
          </Media>
          <Media>
            <Media body className="position-relative pl-0 pl-sm-3 btn-reveal-trigger">
              <Row noGutters className="justify-content-sm-start justify-content-center">
                <Col className="col-3 col-sm-4 col-md-2 col-lg-1 d-flex justify-content-sm-start justify-content-center">
                  <Button color="outline-facebook" size="sm" block className="mt-2 d-flex flex-center user-button" to="#!">
                    <FontAwesomeIcon icon={['fab', 'facebook-square']} transform="grow-8" />
                  </Button>
                </Col>
                <Col className="col-3 col-sm-4 col-md-2 col-lg-1 mx-3 mx-sm-0 mx-lg-3 d-flex justify-content-sm-start justify-content-center">
                  <Button color="outline-twitter" size="sm" block className="mt-2 d-flex flex-center user-button" to="#!">
                    <FontAwesomeIcon icon={["fab", "twitter"]} color="twitter" transform="grow-8" />
                  </Button>
                </Col>
                <Col className="col-3 col-sm-4 col-md-2 col-lg-1 d-flex justify-content-sm-start justify-content-center">
                  <Button color="outline-linkedin" size="sm" block className="mt-2 d-flex flex-center user-button" to="#!">
                    <FontAwesomeIcon icon={['fab', 'linkedin-in']} color="linkedin" transform="grow-8" />
                  </Button>
                </Col>
              </Row>
            </Media>
          </Media>
        </Container>
      </CardHeader>
    </Card>
  );
};

export default UserProfile;
