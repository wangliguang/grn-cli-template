// @flow

import React from 'react';
import { connect } from 'react-redux';
import { reset, CONTAINER } from 'route';
import REQUEST from 'netrequest';
import { REDUCER_TYPE, ANNOTATION_TYPE } from 'const';
import SelectGameScene from './scenes/SelectGameScene';

type stateType = {
  allGame: Array<ANNOTATION_TYPE.gameInfo>,
}

type props = {
  user: ANNOTATION_TYPE.userInfo,
}

class SelectGameContainer extends React.Component <props, stateType> {
  state = {
    allGame: [],
  }

  componentDidMount() {
    REQUEST.getAllGame().then((allGame) => {
      this.setState({ allGame });
    });
  }

  clickFinishSelectGame = (selectGames: Array<number>) => {
    const addGameToAccidPromiseArray = selectGames.map((gameId, sortId) => {
      const request = REQUEST.addGameToAccid({ accid: this.props.user.accid, gameId, sortId });
      return request;
    });
    Promise.all(addGameToAccidPromiseArray).then(() => {
      reset(CONTAINER.TabBar);
    });
  }

  render() {
    return (
      <SelectGameScene
        allGame={this.state.allGame}
        onClickFinish={this.clickFinishSelectGame}
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

const mapDispatchToProps = dispatch => ({
  saveUser: params => dispatch({
    type: REDUCER_TYPE.saveUserInfo,
    payload: params,
  }),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SelectGameContainer);
