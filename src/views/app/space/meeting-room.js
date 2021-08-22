import React from 'react';
import { injectIntl } from 'react-intl';
import { Row } from 'reactstrap';
import { Colxx } from '../../../components/common/CustomBootstrap';

const SpaceMeetingRoom = () => {
  return (
    <>
      <Row>
        <Colxx xxs="12">Meeting Room</Colxx>
      </Row>
    </>
  );
};
export default injectIntl(SpaceMeetingRoom);
