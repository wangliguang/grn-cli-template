const HomePageContainerModle = {};

HomePageContainerModle.namespace = 'user';

HomePageContainerModle.state = {
};


HomePageContainerModle.effects = {
};

HomePageContainerModle.reducers = {
  // state是上次的值, payload是本次获取到的值
  saveUser(state, { payload }) {
    return { ...state, ...payload };
  },
};

export default HomePageContainerModle;
