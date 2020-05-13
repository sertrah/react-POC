import React, { useEffect } from "react";

import "./style.sass";
import { Grid, Row, Col } from "react-flexbox-grid";
import { FormattedMessage } from 'react-intl';

const TranslationPage = () => {
  /*   useFetching(getUser);
   */
  return (
    <Grid fluid className="user__container">
      <Row>
        <Col xs={12} md={4}>
          <h1>
            <FormattedMessage
              id="homeComponent.title"
              defaultMessage="Default message"
            />
          </h1>
        </Col>
      </Row>
    </Grid>
  );
};

/* const useFetching = (someFetchActionCreator) => {
  useEffect(() => {
    someFetchActionCreator();
  }, []);
}; */

export default TranslationPage;
