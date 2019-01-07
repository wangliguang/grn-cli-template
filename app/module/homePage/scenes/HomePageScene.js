// @flow

import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import {
  Container,
  Content,
} from 'native-base';

type props = {
};

export default class HomePageScene extends React.PureComponent <props> {


  render() {
    return (
      <Container>
        <Content>
          <Text>首页</Text>
        </Content>
      </Container>
    );
  }
}
