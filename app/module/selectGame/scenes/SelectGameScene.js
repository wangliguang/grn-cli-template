// @flow

import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  ScrollView,
  Image,
} from 'react-native';
import {
  Container,
  Content,
  Button,
  Toast,
} from 'native-base';
import { ANNOTATION_TYPE } from 'const';
import IMG from '../../../img';
import styles from '../styles/SelectGameScene.style';
import GAME_IMG_MAP from '../../../img/game';

type props = {
  onClickFinish: Function,
  allGame: Array<ANNOTATION_TYPE.gameInfo>,
}

type state = {
  selectGames: Array<number>,
}

export default class sceneTemp extends React.PureComponent <props, state> {
  state = {
    selectGames: [],
  }

  renderTitle = () => (
    <ImageBackground style={styles.titleWraper} resizeMode="stretch" source={IMG.selectGameUpBg}>
      <Text style={styles.bigTitle}>选择最近常玩的游戏</Text>
      <View style={styles.titleDetailWraper}>
        <Text style={styles.titleDetailBeginStr}>“</Text>
        <Text numberOfLines={2} style={styles.titleDetail}>选择你常玩的游戏，我们会推荐和你玩同款游戏的小伙伴！</Text>
        <Text style={styles.titleDetailEndStr}>”</Text>
      </View>
    </ImageBackground>
  )

  renderSelectGame = () => (
    <ScrollView
      style={styles.scrollView}
      contentContainerStyle={styles.scrollViewContent}
      horizontal={false}
      showsHorizontalScrollIndicator
    >
      {this.props.allGame.map((game, index) => (
        <Button
          onPress={() => this.selectGame(game.gameId)}
          activeOpacity={1}
          transparent
          style={[styles.iconShadow, (index + 1) % 3 === 0 ? { marginRight: 0 } : {}]}
          key={`${index + 1}`}
        >
          <View style={styles.iconWraper}>
            <Image
              style={styles.icon}
              source={GAME_IMG_MAP.get(game.gameId)}
            />
            <Image
              source={this.state.selectGames.includes(game.gameId) ?
                IMG.gameSelectSel :
                IMG.gameSelectNor}
              style={styles.iconState}
            />
          </View>
        </Button>
      ))}
    </ScrollView>
  )

  selectGame = (game: number) => {
    let { selectGames } = this.state;
    if (selectGames.includes(game)) {
      selectGames = selectGames.filter(item => item !== game);
      // 创建一个新对象
      this.setState({ selectGames: [].concat(selectGames) });
      return;
    }

    if (selectGames.length === 3) {
      Toast.show({ text: '最多只能选择3个游戏' });
    } else {
      selectGames.push(game);
      this.setState({ selectGames: [].concat(selectGames) });
    }
  }

  renderFinishBtn = () => {
    let isNextStep = true;
    if (this.state.selectGames.length === 0) isNextStep = false;
    return (
      <ImageBackground source={IMG.selectGameDownBg} style={styles.selectGameBgImg}>
        <View style={styles.selectGameBtnWraper}>
          <Button
            activeOpacity={1}
            transparent
            onPress={isNextStep ? () => this.props.onClickFinish(this.state.selectGames) : () => {}}
          >
            <ImageBackground
              style={styles.selectGameBtn}
              source={isNextStep ? IMG.selectGameBg : IMG.selectGameBgNoSel}
            >
              <Text style={[styles.selectGameText, { color: isNextStep ? '#FFF' : '#ADADAD' }]}>完成</Text>
            </ImageBackground>
          </Button>
        </View>
      </ImageBackground>
    );
  }

  render() {
    return (
      <Container>
        <Content
          contentContainerStyle={styles.content}
          alwaysBounceVertical={false}
        >
          {this.renderTitle()}
          {this.renderSelectGame()}
          {this.renderFinishBtn()}
        </Content>
      </Container>
    );
  }
}
