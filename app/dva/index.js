// @flow
import React from 'react';
import { create } from 'dva-core';
import { Root } from 'native-base';
import { Provider } from 'react-redux';
import createLoading from 'dva-loading';
import NavBar from 'route/NavBar';
import registerModel from './Modle';

export default function () {
  const app = create({
    ...createLoading(),
  });
  registerModel(app);
  app.start();
  /* eslint-disable */
  const store = app._store;
  /* eslint-enable */
  return (
    <Provider store={store}>
      <Root>
        <NavBar />
      </Root>
    </Provider>
  );
}
