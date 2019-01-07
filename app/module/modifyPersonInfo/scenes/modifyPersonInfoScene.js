// @flow

import React from 'react';
import {
  ImageBackground,
  Text,
  View,
  TextInput,
  Image,
} from 'react-native';
import {
  Container,
  Content,
  Button,
  ActionSheet,
} from 'native-base';
import ImagePicker from 'react-native-image-crop-picker';
import { STYLE_CONST } from 'const';
import IMG from '../../../img';
import styles from '../styles/modifyPersonInfoScene.style';

const GENDER = {
  woman: 2,
  man: 1,
};

type props = {
  onUploadIcon: Function,
  icon: string,
  onSelectGame: Function,
  onNickNameChange: Function,
  onGenderChange: Function,
}

type state = {
  gender: number,
  nickName: string,
}

const BUTTONS = ['拍照', '相册', 'Cancel'];
const CANCEL_INDEX = 2;

export default class motifyPersonInfoScene extends React.PureComponent <props, state> {
  state = {
    gender: GENDER.man,
    nickName: '',
  }

  renderTitle = () => (
    <View style={styles.titleWraper}>
      <Text style={styles.bigTitle}>首先，怎么称呼你</Text>
      <View style={styles.titleDetailWraper}>
        <Text style={styles.titleDetailBeginStr}>“</Text>
        <Text style={styles.titleDetail}>好看的头像和好听的名字，决定了小伙伴对你的第一印象哦~可别大意了！</Text>
        <Text style={styles.titleDetailEndStr}>”</Text>
      </View>
    </View>
  )

  renderIcon = () => (
    <View>
      <Button transparent onPress={this.selectIcon} style={styles.iconWraper}>
        <Image
          style={styles.iconRect}
          source={this.props.icon.length !== 0 ? { uri: this.props.icon } : IMG.defaultIcon}
        />
        <Image style={styles.photo} source={IMG.photo} />
      </Button>
    </View>
  )

  selectIcon = () => {
    ActionSheet.show({
      options: BUTTONS,
      cancelButtonIndex: CANCEL_INDEX,
      title: '选择方式',
    },
    (buttonIndex) => {
      const iconOptions = {
        cropping: true,
        compressImageMaxHeight: STYLE_CONST.screenH,
        compressImageMaxWidth: STYLE_CONST.screenW,
      };
      if (buttonIndex === 0) {
        ImagePicker.openCamera(iconOptions).then(obj => this.props.onUploadIcon(obj.path));
        return;
      }
      if (buttonIndex === 1) {
        ImagePicker.openPicker(iconOptions).then(obj => this.props.onUploadIcon(obj.path));
      }
    });
  }


  renderNickNameInput = () => (
    <TextInput
      value={this.state.nickName}
      placeholder="取个好听的名字"
      style={styles.input}
      placeholderTextColor="#515151"
      maxLength={8}
      onChangeText={this.onNickNameChange}
      clearButtonMode="while-editing"
    />
  )

  onNickNameChange = (nickName: string) => {
    this.setState({ nickName });
    this.props.onNickNameChange(nickName);
  }

  renderGender = () => (
    <View style={styles.genderWraper}>
      <Button activeOpacity={1} transparent onPress={() => this.selectGender(GENDER.man)}>
        <ImageBackground
          style={styles.genderBtn}
          source={this.state.gender === GENDER.man ? IMG.manBg : IMG.genderNoSel}
        >
          <View>
            <Text style={styles.womenMan}>小哥哥</Text>
          </View>
        </ImageBackground>
      </Button>
      <Button activeOpacity={1} transparent onPress={() => this.selectGender(GENDER.woman)}>
        <ImageBackground
          style={styles.genderBtn}
          source={this.state.gender === GENDER.woman ? IMG.womanBg : IMG.genderNoSel}
        >
          <Text style={styles.womenMan}>小姐姐</Text>
        </ImageBackground>
      </Button>
    </View>
  )

  selectGender = (gender: number) => {
    this.setState({ gender });
    this.props.onGenderChange(gender);
  }

  renderSelectGame = () => {
    let isNextStep = true;
    if (this.props.icon.length === 0 ||
      this.state.nickName.length === 0 ||
      this.state.gender === 0) {
      isNextStep = false;
    }
    return (
      <View style={styles.selectGameBtnWraper}>
        <Button
          activeOpacity={1}
          transparent
          onPress={isNextStep ? this.props.onSelectGame : () => {}}
        >
          <ImageBackground
            style={styles.selectGameBtn}
            source={isNextStep ? IMG.selectGameBg : IMG.selectGameBgNoSel}
          >
            <Text style={[styles.selectGameText, { color: isNextStep ? '#FFF' : '#ADADAD' }]}>选择游戏</Text>
          </ImageBackground>
        </Button>
      </View>
    );
  }

  render() {
    return (
      <Container style={styles.container}>
        <Content
          contentContainerStyle={styles.content}
          alwaysBounceVertical={false}
        >
          {this.renderTitle()}
          {this.renderIcon()}
          {this.renderNickNameInput()}
          {this.renderGender()}
          {this.renderSelectGame()}
        </Content>
      </Container>
    );
  }
}
