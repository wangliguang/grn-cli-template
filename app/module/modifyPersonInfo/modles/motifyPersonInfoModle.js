const motifyPersonInfoModle = {};

motifyPersonInfoModle.namespace = 'user';

motifyPersonInfoModle.state = {
};


motifyPersonInfoModle.effects = {
};

motifyPersonInfoModle.reducers = {
  // state是上次的值, payload是本次获取到的值
  saveUser(state, { payload }) {
    return { ...state, ...payload };
  },
};

export default motifyPersonInfoModle;
