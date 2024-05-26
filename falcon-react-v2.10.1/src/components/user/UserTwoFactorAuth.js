import React, { Fragment, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Card, CardBody, CustomInput, Form, UncontrolledTooltip } from 'reactstrap';

import FalconCardHeader from '../common/FalconCardHeader';
import FormGroupInput from '../common/FormGroupInput';
import UserModal from './UserModal';

import qr from '../../assets/img/auth/QRCode.png';

const SECRET_KEY = 'OSP6QA7AZN4MN95AV'

const UserTwoFactorAuth = () => {

  const [twoFactorPhone, setTwoFactorPhone] = useState('');
  const [twoFactorPhoneCode, setTwoFactorPhoneCode] = useState('');
  const [twoFactorMobile, setTwoFactorMobile] = useState(false);

  const [twoFactorGoogleCode, setTwoFactorGoogleCode] = useState('');
  const [twoFactorGoogle, setTwoFactorGoogle] = useState(false);

  const [uid_sig, setUid_sig] = useState('');
  const [error, setError] = useState(null);
  // testing error values
  // 'Error validate'
  const [data, setData] = useState(null);
  // testing data values
  // {
  //   status: 'success',
  //   message: 'Good, success phone 2fa'
  // }

  const [modal, setModal] = useState(false);

  const handleToggleModal = () => setModal(!modal);

  const handleSubmit2FAPhone = async e => {
    e.preventDefault();

    const url = '/api/v1/two-factor/phone'
    const data = !uid_sig ? {twoFactorMobile, twoFactorPhone} : {uid_sig, twoFactorPhoneCode}

    setUid_sig('12')

    await axios.post(url, data)
    .then(response => response.data.uid_sig ? setUid_sig(response.data.uid_sig) : setData(response.data))
    .catch(error => setError(error))
    .finally(() => handleToggleModal)
  };

  const validate2FAPhone = uid_sig && !twoFactorPhoneCode || uid_sig && twoFactorPhone && !twoFactorPhoneCode || !twoFactorPhone

  const handleSubmit2FAGoogle = async e => {
    e.preventDefault();

    const url = '/api/v1/two-factor/google'
    const data = {twoFactorGoogle, twoFactorGoogleCode}

    await axios.post(url, data)
    .then(response => setData(response.data))
    .catch(error => setError(error))
    .finally(() => handleToggleModal)
  };

  return (
    <Card className="mb-3">
      <FalconCardHeader title="Two-factor auth" light={false} />
      <CardBody className="bg-light">
        <h6 className="font-weight-bold">
          Phone authentication
          <FontAwesomeIcon icon="question-circle" className="fs--2 ml-1 text-primary" id="view-two-factor-phone-tooltip" />
          <UncontrolledTooltip placement="top" target="view-two-factor-phone-tooltip">
            You will receive an SMS code
          </UncontrolledTooltip>
        </h6>
        <CustomInput
          id="two-factor-mobile"
          label="Enable 2FA over the phone?"
          onChange={() => setTwoFactorMobile(!twoFactorMobile)}
          checked={twoFactorMobile}
          type="switch"
        />
        <Form onSubmit={handleSubmit2FAPhone}>
          <FormGroupInput
            id="phone"
            label="Phone"
            value={twoFactorPhone}
            onChange={({ target }) => setTwoFactorPhone(target.value)}
            type="tel"
            disabled={!twoFactorMobile}
          />
          <FormGroupInput
            id="phone-code"
            label="Enter code"
            value={twoFactorPhoneCode}
            onChange={({ target }) => setTwoFactorPhoneCode(target.value)}
            type="text"
            disabled={!uid_sig}
          />
          <Button color="primary" block disabled={validate2FAPhone}>
            Send {!uid_sig ? 'code on phone' : 'code for validate'}
          </Button>
        </Form>
        <hr className="border-dashed border-bottom-0" />
        <h6 className="font-weight-bold">
          Google authentication
          <FontAwesomeIcon icon="question-circle" className="fs--2 ml-1 text-primary" id="view-two-factor-google-tooltip" />
          <UncontrolledTooltip placement="top" target="view-two-factor-google-tooltip">
            You must have installed google-auth application
          </UncontrolledTooltip>
        </h6>
        <CustomInput
          id="two-factor-google"
          label="Enable 2FA over the google-auth?"
          onChange={() => setTwoFactorGoogle(!twoFactorGoogle)}
          checked={twoFactorGoogle}
          type="switch"
        />
        {
          twoFactorGoogle && (
            <Fragment>
              <h6 className="font-weight-bold mt-3">
                QR-code
                <FontAwesomeIcon icon="question-circle" className="fs--2 ml-1 text-primary" id="view-two-factor-qr-tooltip" />
                <UncontrolledTooltip placement="top" target="view-two-factor-qr-tooltip">
                  For your convenience, you can use the Google Authenticator app. <br />
                  Scan the QR and get the authentication code.
                </UncontrolledTooltip>
              </h6>
              <img className="d-block mx-auto mt-3" src={qr} alt="qr-code" width={250} />
              <h6 className="font-weight-bold mt-3">
                Secret key
                <FontAwesomeIcon icon="question-circle" className="fs--2 ml-1 text-primary" id="view-two-factor-key-tooltip" />
                <UncontrolledTooltip placement="top" target="view-two-factor-key-tooltip">
                  You can also use the secret key
                </UncontrolledTooltip>
              </h6>
              <span className='d-block mb-3'>
                {SECRET_KEY}
              </span>
              <Form onSubmit={handleSubmit2FAGoogle}>
                <FormGroupInput
                  id="google-code"
                  label="Enter code"
                  value={twoFactorGoogleCode}
                  onChange={({ target }) => setTwoFactorGoogleCode(target.value)}
                  type="text"
                />
                <Button color="primary" block disabled={!twoFactorGoogleCode}>
                  Send code for validate
                </Button>
              </Form>
            </Fragment>
          )
        }
      </CardBody>
      <UserModal
        modal={modal}
        setModal={setModal}
        handleToggleModal={handleToggleModal}
        data={data}
        error={error}
      />
    </Card>
  );
};

export default UserTwoFactorAuth;
