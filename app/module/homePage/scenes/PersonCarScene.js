// @flow

import React from 'react';
import {
  View,
  Text,
  Image,
} from 'react-native';
import IMG from '../../../img';
import styles from '../styles/PersonCardScene.style';
import GAME_IMG_MAP from '../../../img/game';


const TAGS_COLOR = [
  { bgColor: '#FF7E7E', borderColor: '#D35F5F' },
  { bgColor: '#F6C77B', borderColor: '#E4AA5D' },
  { bgColor: '#62C08B', borderColor: '#3AA37D' },
];

export type PersonCardType = {
  // TODO: 用户头像，做滑动与头像的列表的关联时一块处理
  icon: Array<string>,
  nickName: string,
  gender: number,
  tags: Array<string>,
  gameUserName: string,
  gameUserRegion: string,
  gameId: number,
  gameUserMotto: string,
  gameUserOtherGames: Array<string>,
}

type props = {
 ...PersonCardType,
}

export default class PersonCardScene extends React.Component <props> {
  componentDidMount() {

  }

  renderPersonInfo = () => (
    <View style={styles.personInfoShadow}>
      <View style={styles.personInfo}>
        <View style={styles.nickNameGender}>
          <Text style={styles.nickName}>{this.props.nickName}</Text>
          <Image source={IMG.gender === 1 ? IMG.manIcon : IMG.womanIcon} />
        </View>

        <View style={styles.tagWraper}>
          {this.props.tags && this.props.tags.map((tagName, index) => (
            <View
              key={`${index + 1}`}
              style={[styles.tag, {
                backgroundColor: TAGS_COLOR[index].bgColor,
                borderColor: TAGS_COLOR[index].borderColor,
              }]}
            >
              <Text style={{ color: 'white' }}>{tagName}</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  )

  renderLink = () => (
    <View style={styles.linkWraper}>
      <Image style={styles.link} source={IMG.homePageLink} />
      <Image style={styles.link} source={IMG.homePageLink} />
    </View>
  )

  renderGameInfo = () => (
    <View style={[styles.personInfo, styles.gameInfo]}>
      <Text style={styles.gameInfoTitle}>游戏资料</Text>
      <View style={styles.gameIdIcon}>
        <View style={styles.gameId}>
          <View style={styles.gameIdTop}>
            <Text style={styles.gameIdTopTitle}>ID</Text>
            <Text style={styles.gameIdTopContent}>{this.props.gameUserName}</Text>
          </View>
          <View style={[styles.gameIdTop, { marginTop: 8 }]}>
            <Text style={styles.gameIdTopTitle}>区服</Text>
            <Text style={styles.gameIdTopContent}>{this.props.gameUserRegion}</Text>
          </View>
        </View>
        <View style={styles.gameIcon}>
          <Image style={styles.icon} source={GAME_IMG_MAP.get(this.props.gameId)} />
        </View>
      </View>
      <View style={styles.addFriendWraper}>
        <Text style={styles.addFriendTitle}>扩列宣言</Text>
        <Text style={styles.addFriendContent}>{this.props.gameUserMotto}</Text>
      </View>

      <View style={styles.otherGame}>
        <Text style={styles.otherGameTitle}>他也玩</Text>
        {this.props.gameUserOtherGames && this.props.gameUserOtherGames.map(game => (
          <Text key={`${game}`} style={styles.otherGameName}>{game}</Text>
        ))}
      </View>

    </View>
  )

  render() {
    return (
      <View style={styles.content}>
        {this.renderPersonInfo()}
        {this.renderLink()}
        {this.renderGameInfo()}
      </View>
    );
  }
}
