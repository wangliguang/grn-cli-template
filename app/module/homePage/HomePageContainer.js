// @flow

import React from 'react';
import { connect } from 'react-redux';
// import { jump, CONTAINER } from 'route';
import { ANNOTATION_TYPE } from 'const';
import REQUEST from 'netrequest';
import HomePageScene from './scenes/HomePageScene';


type props = {
  user: ANNOTATION_TYPE.userInfo,
}

type stateType = {
}

class HomePageContainer extends React.Component <props, stateType> {
  componentDidMount() {
    
  }

  render() {
    return (
      <HomePageScene />
    );
  }
}

const mapStateToProps = (state) => {
  const { homepage } = state;
  return {
    homepage,
  };
};

export default connect(
  mapStateToProps,
)(HomePageContainer);
