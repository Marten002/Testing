import React from 'react';
import { Card, CardBody } from 'reactstrap';

import FalconCardHeader from '../common/FalconCardHeader';
import Loader from '../common/Loader';

import useFakeFetch from '../../hooks/useFakeFetch';

import { isIterableArray } from '../../helpers/utils';

const UserQuotes = ({ quotes: quotesProp }) => {

  const { loading: loadingQuotes, data: quotes } = useFakeFetch(quotesProp);

  return (
    <Card className="mb-3">
      <FalconCardHeader title="Quotes" light={false} />
      <CardBody className="bg-light pt-0">
        {
          loadingQuotes
          ? <Loader />
          : isIterableArray(quotes) && quotes.map((quote, index) => {
            return <span key={index} className="d-block mt-3">„{quote.text}“</span>
          })
        }
      </CardBody>
    </Card>
  );
};

export default UserQuotes;
