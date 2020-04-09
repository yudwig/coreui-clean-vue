export namespace ItemListMessage {
  export enum Message {
    CREATE_SUCCESS = 'Registration Successful.',
    TECH_ERROR = 'Technical Error is occurred.',
    NETWORK_ERROR = 'Network Error is occurred.'
  }
  export enum ClassName {
    SUCCESS= 'primary',
    ERROR = 'danger'
  }
}

export interface ItemListMessagePresentation {
  message: string,
  className: string
}