export namespace ItemCreateMessage {
  export enum Message {
    CREATE_SUCCESS = '',
    CREATE_ERROR = 'Error has occurred.',
    NETWORK_ERROR = 'Network Error has occurred.'
  }
  export enum ClassName {
    SUCCESS = '',
    ERROR = 'danger'
  }
}

export interface ItemCreateMessagePresentation {
  message: string,
  className: string,
  isSuccess: boolean
}