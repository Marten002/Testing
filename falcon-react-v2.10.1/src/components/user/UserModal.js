import React from 'react';
import { Button, Media, Modal, ModalBody } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const UserModal = ({ modal, handleToggleModal, setModal, data, error }) => {
  return (
    <Modal isOpen={modal} toggle={handleToggleModal} centered={true} style={{ width: '400px' }}>
      <ModalBody className="p-4">
        <Button
          className="btn text-danger position-absolute t-0 r-0  mr-2 mt-1 p-0 bg-transparent border-0"
          onClick={() => setModal(!modal)}
        >
          <FontAwesomeIcon icon="times" />
        </Button>
        <Media className="flex-center">
          <Media body>
            {
              !data && (error || !error)
              ? <h6 className="fs-2 font-weight-bold text-capitalize text-center text-danger">
                  {error ? error : 'Some error'}
                </h6>
              : data?.status === 'success' && (
                <h6 className="fs-2 font-weight-bold text-capitalize text-center text-success">
                  {data.message}
                </h6>
              )
            }
          </Media>
        </Media>
      </ModalBody>
    </Modal>
  );
};

export default UserModal;
