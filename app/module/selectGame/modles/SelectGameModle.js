const SelectGameModle = {};

SelectGameModle.namespace = 'user';

SelectGameModle.state = {
};


SelectGameModle.effects = {
};

SelectGameModle.reducers = {
  // state是上次的值, payload是本次获取到的值
  saveUser(state, { payload }) {
    return { ...state, ...payload };
  },
};

export default SelectGameModle;
