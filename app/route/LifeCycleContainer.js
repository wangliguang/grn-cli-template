import React from 'react';
import { NavigationEventSubscription } from 'react-navigation';

type lifeCycleContainerProps = {
  navigation: Object,
};

const LifeCycleContainer = (WrappedComponent: React.DOM) => {
  class lifeCycleContainer extends React.Component<lifeCycleContainerProps> {
    /* eslint-disable react/sort-comp,no-underscore-dangle */
    mounted: boolean;

    willFocusSubscription: NavigationEventSubscription;

    didFocusSubscription: NavigationEventSubscription;

    willBlurSubscription: NavigationEventSubscription;

    didBlurSubscription: NavigationEventSubscription;

    screen: React.Component;

    static navigationOptions = {
      ...WrappedComponent.navigationOptions,
      gesturesEnabled: false,
    };

    componentDidMount = () => {
      this.mounted = true;
      this.willFocusSubscription =
        this.props.navigation.addListener('willFocus', this.willFocus);
      this.didFocusSubscription =
        this.props.navigation.addListener('didFocus', this.didFocus);
      this.willBlurSubscription =
        this.props.navigation.addListener('willBlur', this.willBlur);
      this.didBlurSubscription =
        this.props.navigation.addListener('didBlur', this.didBlur);
    };

    componentWillUnmount = () => {
      this.willBlurSubscription.remove();
      this.didBlurSubscription.remove();
      this.willFocusSubscription.remove();
      this.didFocusSubscription.remove();
      this.mounted = false;
    };


    willFocus = () => {
      // ref可以传递了
      const reallyContainer = this.screen;
      if (reallyContainer && reallyContainer.componentWillAppear) {
        reallyContainer.componentWillAppear();
      }
    };

    didFocus = () => {};

    willBlur = () => {
      const reallyContainer = this.screen;
      if (reallyContainer && reallyContainer.componentWillDisappear) {
        reallyContainer.componentWillDisappear();
      }
    };

    didBlur = () => {};

    render() {
      return (
        <WrappedComponent
          {...this.props}
          {...this.props.navigation.state.params}
          ref={(ref) => { this.screen = ref; }}
        />
      );
    }
  }

  return lifeCycleContainer;
};

export default LifeCycleContainer;

/* eslint-enable react/sort-comp, no-underscore-dangle */
