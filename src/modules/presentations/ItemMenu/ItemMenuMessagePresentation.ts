export namespace ItemMenuMessage {
  export enum Message {
    DELETE_ERROR = 'Error.',
    NETWORK_ERROR = 'Network Error has occurred.'
  }
  export enum ClassName {
    SUCCESS = 'primary',
    ERROR = 'danger'
  }
}

export interface ItemMenuMessagePresentation {
  message: string,
  className: string,
}
