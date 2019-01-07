// @flow

import React from 'react';
import {
  ImageBackground,
  View,
  Text,
  Image,
  ScrollView,
} from 'react-native';
import {
  Container,
} from 'native-base';
import { STYLE_CONST } from 'const';
import PersonCarScene from './PersonCarScene';
import type { PersonCardType } from './PersonCarScene';
import IMG from '../../../img';
import styles from '../styles/HomePageScene.style';

type props = {
  icon: string,
  newRecommandUsers: Array<PersonCardType>,
  newRecommandUserIcons: Array<string>,
};

let thisIocnScrollRef: any = null;
let thisPersonCardScrollRef: any = null;
let thisRecommandUserIconRefs: Array<any> = [];
let thisRecommandUserIconHeightWidth: number = 40;


export default class HomePageScene extends React.PureComponent <props> {
  componentDidMount() {
    this.checkRecommandUserIconRefs();
  }

  componentWillUnmount() {
    thisRecommandUserIconRefs = [];
  }

  checkRecommandUserIconRefs = () => {
    const checkRefstimer = setInterval(() => {
      if (thisRecommandUserIconRefs.length === 0) {
        return;
      }
      clearInterval(checkRefstimer);
      thisRecommandUserIconRefs[0].setNativeProps({
        style: {
          width: 77,
          height: 77,
          borderRadius: 77 / 2,
          marginLeft: 16,
        },
      });
    }, 50);
  }


  renderScrollIcon = () => (
    <ScrollView
      ref={(ref) => { thisIocnScrollRef = ref; }}
      style={styles.scrollIcon}
      alwaysBounceVertical={false}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      horizontal
      contentContainerStyle={{
        width: this.props.newRecommandUserIcons.length * 40,
      }}
    >
      {this.props.newRecommandUserIcons &&
      this.props.newRecommandUserIcons.map((iconUrl, index) => (
        <Image
          ref={(ref) => { thisRecommandUserIconRefs.push(ref); }}
          key={`${index + 1}`}
          source={{ uri: iconUrl }}
          style={[styles.recommandUserIcon]}
        />
      ))}
    </ScrollView>
  );

  renderPersonCardScroll = () => (
    <ScrollView
      ref={(ref) => { thisPersonCardScrollRef = ref; }}
      onScroll={this.personCardScrollChange}
      scrollEventThrottle={16}
      style={styles.personCard}
      alwaysBounceVertical={false}
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      horizontal
      contentContainerStyle={[
        styles.contentScroll,
        { width: STYLE_CONST.screenW * this.props.newRecommandUsers.length },
      ]}
    >
      {this.props.newRecommandUsers.map(person => (
        <PersonCarScene key={`${person.gameId}`} {...person} />
      ))}
    </ScrollView>
  )

  personCardScrollChange = (e) => {
    const offsetX = e.nativeEvent.contentOffset.x;
    const currentPage = Math.floor(Math.abs(offsetX / STYLE_CONST.screenW));

    thisRecommandUserIconHeightWidth = 77 - offsetX * (34 / STYLE_CONST.screenW);

    thisRecommandUserIconRefs[currentPage].setNativeProps({
      style: {
        width: thisRecommandUserIconHeightWidth,
        height: thisRecommandUserIconHeightWidth,
        borderRadius: thisRecommandUserIconHeightWidth / 2,
        marginLeft: 16,
      },
    });

    thisIocnScrollRef.scrollTo({ x: offsetX * ((30 + 16 + thisRecommandUserIconHeightWidth / 2) / STYLE_CONST.screenW), y: 0, animated: false });
  }

  render() {
    return (
      <Container>
        <ImageBackground source={IMG.homePageBg} style={styles.homePageBg}>
          <ImageBackground
            source={STYLE_CONST.isIphoneX ? IMG.homePageHeaderXBg : IMG.homePageHeaderBg}
            style={styles.homePageHeader}
          >
            <View>
              <Text style={styles.headerTitle}>距离下次推荐</Text>
            </View>
            <Image
              style={styles.icon}
              source={{ uri: this.props.icon }}
            />
          </ImageBackground>
          {this.renderScrollIcon()}
          {this.renderPersonCardScroll()}
        </ImageBackground>
      </Container>
    );
  }
}
