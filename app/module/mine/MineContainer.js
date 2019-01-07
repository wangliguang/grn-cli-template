// @flow
import React from 'react';
import {
  View,
} from 'react-native';

type Props = {
}

export default class MineContainer extends React.Component<Props> {
  componentDidMount() {
    //
  }

  render() {
    return (
      <View style={{ flex: 1, alignSelf: 'stretch', backgroundColor: 'red' }} />
    );
  }
}
