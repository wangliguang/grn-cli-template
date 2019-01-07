// @flow

const BASE_URL = 'http://10.12.52.48:3000/';

const FILEPOST = (filePath) => {
  // eslint-disable-next-line no-undef
  const formData = new FormData();
  const file: any = { uri: filePath, type: 'multipart/form-data', name: 'img.jpg' };
  formData.append('file', file);

  // eslint-disable-next-line no-undef
  return fetch(`${BASE_URL}upload`, {
    method: 'POST',
    headers: {
      'Content-Type': 'multipart/form-data;charset=utf-8',
    },
    body: formData,
  }).then(response => response.json());
};


const POST = (url, params) => {
  const jsonRpcParams = {
    jsonrpc: '2.0',
    method: params.action,
    id: 1,
    params: params.data,
  };
  /* eslint-disable no-undef */
  return fetch(`${BASE_URL}${url}`, {
    body: JSON.stringify(jsonRpcParams),
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
  }).then(response => response.json())
    .then((data) => {
      const err = data.error;
      if (err) {
        return Promise.reject(new Error(err.message));
      }
      return data.result;
    });
  /* eslint-enable no-undef */
};


const upload = (filePath: string) => {
  const request = FILEPOST(filePath);
  return request;
};

type getVerifyCodeParamsType = {
  mobile: string;
}
const getVerifyCode = (params: getVerifyCodeParamsType) => {
  const request = POST('users', {
    action: 'getVerifyCode',
    data: params,
  });
  return request;
};

type chekVerifyCodeParamsType = {
  mobile: string,
  code: string,
}
const chekVerifyCode = (params: chekVerifyCodeParamsType) => {
  const request = POST('users', {
    action: 'checkVerifyCode',
    data: params,
  });
  return request;
};

type loginParamsType = {
  mobile: string,
  token: string,
}
const login = (params: loginParamsType) => {
  const request = POST('users', {
    action: 'login',
    data: params,
  });
  return request;
};

type registerParamsType = {
  mobile: string,
}
const register = (params: registerParamsType) => {
  const request = POST('users', {
    action: 'register',
    data: params,
  });
  return request;
};

type getTokenByMobileParamsType = {
  mobile: string,
}
const getTokenByMobile = (params: getTokenByMobileParamsType) => {
  const request = POST('users', {
    action: 'getTokenByMobile',
    data: params,
  });
  return request;
};

type modifyUserInfoParamsType = {
  nickName: string,
  gender: number,
  icon: string,
}
const modifyUserInfo = (params: modifyUserInfoParamsType) => {
  const request = POST('users', {
    action: 'modifyUserInfo',
    data: params,
  });
  return request;
};


const getAllGame = () => {
  const request = POST('game', {
    action: 'getAllGame',
    data: {},
  });
  return request;
};

type addGameToAccidParamsType = {
  accid: string,
  gameId: number,
  sortId: number,
}
const addGameToAccid = (params: addGameToAccidParamsType) => {
  const request = POST('game', {
    action: 'addGameToAccid',
    data: params,
  });
  return request;
};


type getCurrentRecommandsParamsType = {
  accid: string,
}
const getCurrentRecommands = (params: getCurrentRecommandsParamsType) => {
  const request = POST('recommand', {
    action: 'getCurrentRecommands',
    data: params,
  });
  return request;
};

export default {
  getVerifyCode,
  chekVerifyCode,
  login,
  getTokenByMobile,
  register,
  upload,
  modifyUserInfo,
  getAllGame,
  addGameToAccid,
  getCurrentRecommands,
};
