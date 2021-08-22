import React from 'react';
import { injectIntl } from 'react-intl';
import { Row } from 'reactstrap';
import { Colxx } from '../../../components/common/CustomBootstrap';

const SpaceDesks = () => {
  return (
    <>
      <Row>
        <Colxx xxs="12">Desks</Colxx>
      </Row>
    </>
  );
};
export default injectIntl(SpaceDesks);
