// @flow

const BASE_URL = 'http://127.0.0.1:3000/';

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

type getVerifyCodeParamsType = {
  mobile: string;
}
const getVerifyCode = (params: getVerifyCodeParamsType) => {
  const request = POST('xxx', {
    action: 'xxxx',
    data: params,
  });
  return request;
};


export default {
  getVerifyCode,
};
