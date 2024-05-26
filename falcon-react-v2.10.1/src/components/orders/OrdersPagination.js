import React, { useContext } from 'react';
import { Button, CardFooter } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import AppContext from '../../context/Context';

import { getPaginationArray } from '../../helpers/utils';

const OrdersPagination = ({ meta, handler }) => {

  const { isRTL } = useContext(AppContext);
  const { total, pageNo, itemsPerPage, nextPageNo, prevPageNo } = meta;
  const { nextPage, prevPage, currentPage } = handler;

  return (
    <CardFooter className="d-flex justify-content-center align-items-center bg-light border-top">
      <Button color="falcon-default" size="sm" className="ml-1 ml-sm-2" onClick={prevPage} disabled={!prevPageNo}>
        <FontAwesomeIcon icon={`chevron-${isRTL ? 'right' : 'left'}`} />
      </Button>
      {
        getPaginationArray(total, itemsPerPage).map(page => (
          <Button
            color={pageNo === page ? 'falcon-primary' : 'falcon-default'}
            size="sm"
            className="ml-2"
            onClick={() => currentPage(page)}
            key={page}
          >
            {page}
          </Button>
        ))
      }
      <Button color="falcon-default" size="sm" className="ml-1 ml-sm-2" onClick={nextPage} disabled={!nextPageNo}>
        <FontAwesomeIcon icon={`chevron-${isRTL ? 'left' : 'right'}`} />
      </Button>
    </CardFooter>
  );
};

export default OrdersPagination;
