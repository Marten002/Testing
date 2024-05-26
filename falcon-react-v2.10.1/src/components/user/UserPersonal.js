import React, { Fragment, useState } from 'react';
import axios from 'axios';
import { Card, CardBody, Container, CustomInput } from 'reactstrap';

import FalconCardHeader from '../common/FalconCardHeader';
import Loader from '../common/Loader';

const UserPersonal = () => {

  const [selectValueLanguage, setSelectValueLanguage] = useState('EN')
  const [selectValueCurrency, setSelectValueCurrency] = useState('USD')

  const [loading, setLoading] = useState(false)

  const handleSubmitLanguage = async ({ value }) => {
    setLoading(true)
    setSelectValueLanguage(value);

    const url = '/api/v1/profile/language'

    await axios.post(url, value)
    .then(response => response.data.status)
    .catch(error => console.log(error))
    .finally(() => setLoading(false))
  }

  const handleSubmitCurrency = async ({ value }) => {
    setLoading(true)
    setSelectValueCurrency(value);

    const url = '/api/v1/profile/currency'

    await axios.post(url, value)
    .then(response => response.data.status)
    .catch(error => console.log(error))
    .finally(() => setLoading(false))
  }

  return (
    <Card className="mb-3">
      <FalconCardHeader title="Personal settings" light={false} />
      <CardBody className="bg-light">
        {
          loading
          ? <Loader />
          : <Fragment>
              <Container className="d-flex align-items-center p-0">
                <CustomInput
                  className="user-select"
                  id="language"
                  type="select"
                  bsSize="sm"
                  value={selectValueLanguage}
                  onChange={({ target }) => handleSubmitLanguage(target)}
                >
                  <option value="RU">RU</option>
                  <option value="EN">EN</option>
                  <option value="PL">PL</option>
                  <option value="UA">UA</option>
                </CustomInput>
                <span className="mb-0 ml-2 user-choose-text font-weight-bold">
                  Choose your language
                </span>
              </Container>
              <Container className="d-flex align-items-center p-0 mt-3">
                <CustomInput
                  className="user-select"
                  id="currency"
                  type="select"
                  bsSize="sm"
                  value={selectValueCurrency}
                  onChange={({ target }) => handleSubmitCurrency(target)}
                >
                  <option value="RUB">RUB</option>
                  <option value="EUR">EUR</option>
                  <option value="USD">USD</option>
                  <option value="GBP">GBP</option>
                </CustomInput>
                <span className="mb-0 ml-2 user-choose-text font-weight-bold">
                  Choose your currency
                </span>
              </Container>
            </Fragment>
        }
      </CardBody>
    </Card>
  );
};

export default UserPersonal;
