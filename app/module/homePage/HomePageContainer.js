// @flow

import React from 'react';
import { connect } from 'react-redux';
// import { jump, CONTAINER } from 'route';
import { ANNOTATION_TYPE } from 'const';
import REQUEST from 'netrequest';
import HomePageScene from './scenes/HomePageScene';
import type { PersonCardType } from './scenes/PersonCarScene';


type props = {
  user: ANNOTATION_TYPE.userInfo,
}

type stateType = {
  dataArray: Array<PersonCardType>,
  userIcons: Array<string>,
}

class HomePageContainer extends React.Component <props, stateType> {
  state = {
    newRecommandUsers: [],
    newRecommandUserIcons: [],
  }

  componentDidMount() {
    REQUEST.getCurrentRecommands({
      accid: this.props.user.accid,
    }).then(({ newRecommandUsers, newRecommandUserIcons }) => {
      this.setState({ newRecommandUsers, newRecommandUserIcons });
    });
  }

  render() {
    return (
      <HomePageScene
        icon={this.props.user.icon}
        newRecommandUsers={this.state.newRecommandUsers}
        newRecommandUserIcons={this.state.newRecommandUserIcons}
      />
    );
  }
}

const mapStateToProps = (state) => {
  const { user } = state;
  return {
    user,
  };
};

export default connect(
  mapStateToProps,
)(HomePageContainer);
