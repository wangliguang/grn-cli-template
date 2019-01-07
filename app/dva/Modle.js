// @flow

import userModel from '../module/login/modles/userModle';

const registerModel = (app: any) => {
  app.model(userModel);
};

export default registerModel;
