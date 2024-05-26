import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import { Card, CardBody, CustomInput, UncontrolledTooltip } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import FalconCardHeader from '../common/FalconCardHeader';
import Loader from '../common/Loader';

const UserUpdateNotifications = () => {

  const [transaction, setShowTransaction] = useState(true);
  const [weekly, setShowWeekly] = useState(false);
  const [monthly, setShowMonthly] = useState(false);
  const [special, setShowSpecial] = useState(true);
  const [personalized, setShowPersonalized] = useState(true);

  const [loading, setLoading] = useState(false)

  const handleSubmitNotifications = async () => {
    setLoading(true)

    const url = '/api/v1/profile/notification'
    const data = {
      transaction,
      weekly,
      monthly,
      special,
      personalized
    }

    console.log('123');

    await axios.post(url, data)
    .then(response => response.data.status)
    .catch(error => console.log(error))
    .finally(() => setLoading(false))
  };

  useEffect(() => {
    handleSubmitNotifications()
  }, [transaction, weekly, monthly, special, personalized])

  return (
    <Card className="mb-3">
      <FalconCardHeader title="Update notifications" light={false} />
      <CardBody className="bg-light">
        {
          loading
          ? <Loader />
          : <Fragment>
              <h6 className="font-weight-bold">
                What notifications to send you ?
                <FontAwesomeIcon icon="question-circle" className="fs--2 ml-1 text-primary" id="view-setting-tooltip" />
                <UncontrolledTooltip placement="top" target="view-setting-tooltip">
                  Notifications will be sent to your E-mail
                </UncontrolledTooltip>
              </h6>
              <CustomInput
                id="allow-transaction"
                label="Transaction report"
                onChange={() => setShowTransaction(!transaction)}
                checked={transaction}
                type="switch"
              />
              <CustomInput
                id="allow-weekly"
                label="Weekly transaction report"
                onChange={() => setShowWeekly(!weekly)}
                checked={weekly}
                type="switch"
              />
              <CustomInput
                id="allow-monthly"
                label="Monthly transaction report"
                onChange={() => setShowMonthly(!monthly)}
                checked={monthly}
                type="switch"
              />
              <hr className="border-dashed border-bottom-0" />
              <CustomInput
                id="allow-special"
                label="Special notifications"
                onChange={() => setShowSpecial(!special)}
                checked={special}
                type="switch"
              />
              <CustomInput
                id="allow-personalized"
                label="Our personalized offers"
                onChange={() => setShowPersonalized(!personalized)}
                checked={personalized}
                type="switch"
              />
            </Fragment>
        }
      </CardBody>
    </Card>
  );
};

export default UserUpdateNotifications;
