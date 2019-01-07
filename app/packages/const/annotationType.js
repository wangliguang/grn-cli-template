export type userInfo = {
  name: string,
  icon: string,
  email: string,
  token: string,
  mobile: string,
  gender: number,
  accid: string,
};

export type serverResponse = {
  code?: number,
  message?: string
}

export type gameInfo = {
  gameId: number,
  gameName: string,
}
