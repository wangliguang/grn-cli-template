// @flow

const checkMobile = (mobile: string) => {
  if (!(/^1(3|4|5|7|8)\d{9}$/.test(mobile))) {
    return false;
  }
  return true;
};

module.exports = {
  checkMobile,
};
