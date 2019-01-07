// @flow

import React from 'react';
import { connect } from 'react-redux';
import { jump, CONTAINER } from 'route';
import { REDUCER_TYPE, ANNOTATION_TYPE } from 'const';
import REQUEST from 'netrequest';
import { Toast } from 'native-base';
import ModifyPersonScene from './scenes/modifyPersonInfoScene';

type stateType = {
  icon: string,
  nickName: string,
  gender: number,
}

type props = {
  user: ANNOTATION_TYPE.userInfo,
}


class ModifyPersonInfoContainer extends React.Component <props, stateType> {
  state = {
    icon: '',
    nickName: '',
    gender: 0,
  }

  uploadIcon = (iconPath: string) => {
    REQUEST.upload(iconPath).then((result) => {
      this.setState({ icon: result[0] });
    }).catch((err) => {
      Toast.show({ text: err.message });
    });
  }

  nickNameChange = (nickName) => {
    this.setState({ nickName });
  }

  genderChange = (gender) => {
    this.setState({ gender });
  }

  selectGame = () => {
    REQUEST.modifyUserInfo({
      nickName: this.state.nickName,
      gender: this.state.gender,
      icon: this.state.icon,
      accid: this.props.user.accid,
    }).then(() => {
      jump(CONTAINER.SelectGame);
    });
  }

  render() {
    return (
      <ModifyPersonScene
        onUploadIcon={this.uploadIcon}
        icon={this.state.icon}
        onNickNameChange={this.nickNameChange}
        onGenderChange={this.genderChange}
        onSelectGame={this.selectGame}
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
)(ModifyPersonInfoContainer);
