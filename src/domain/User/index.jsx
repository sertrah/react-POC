import React, { useEffect, useRef } from "react";
import { constants } from "stateManagment/actions/user";
import { connect } from "react-redux";
import { getUser } from "stateManagment/reselect/user";
import PropTypes from "prop-types";

const User = ({ userInfo, getUser }) => {
  useFetching(getUser);
  console.log(userInfo);

  return (
    <div>
      <span>{userInfo?.name?.title}</span>
      <h1>{userInfo?.name?.first}</h1>
    </div>
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
