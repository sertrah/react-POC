import React, { useEffect } from "react";
import { constants } from "stateManagment/actions/user";
import { connect } from "react-redux";
import { getUser } from "stateManagment/reselect/user";
import PropTypes from "prop-types";
import Avatar from "./Avatar";
import Profile from "./Profile";
import "./style.sass";
import { Grid, Row, Col } from "react-flexbox-grid";

const User = ({ userInfo, getUser }) => {
  useFetching(getUser);
  console.log(userInfo);

  return (
    <Grid fluid>
      <Row className="user__container">
        <Col xs={12} md={4}>
          <Avatar
            picture={userInfo?.picture.large}
            title={userInfo?.name?.title}
            name={userInfo?.name?.first}
          />
        </Col>
        <Col mdOffset={6} md={7} xs={12}>
          <Profile userInfo={userInfo} />
        </Col>
      </Row>
    </Grid>
  );
};

User.propTypes = {
  userInfo: PropTypes.object,
  getUser: PropTypes.func,
};

const useFetching = (someFetchActionCreator) => {
  useEffect(() => {
    someFetchActionCreator();
  }, []);
};

const mapStateToProps = (state) => {
  return {
    userInfo: getUser(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUser: () => dispatch({ type: constants.FETCH_USER }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(User);
