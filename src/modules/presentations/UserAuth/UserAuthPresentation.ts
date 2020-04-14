export namespace UserAuthMessage {
  export enum Message {
    FORMAT_ERROR = 'Error. Invalid Format.',
    LOGIN_ERROR = 'Login Error.',
    NETWORK_ERROR = 'Error. Network Error has occurred.'
  }
  export enum ClassName {
    SUCCESS = 'primary',
    ERROR = 'danger'
  }
}

export interface UserAuthPresentation {
  message: string,
  className: string,
}
