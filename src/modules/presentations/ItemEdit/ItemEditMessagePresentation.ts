export namespace ItemEditMessage {
  export enum Message {
    UPDATE_ERROR = 'Error.',
    NETWORK_ERROR = 'Network Error has occurred.'
  }
  export enum ClassName {
    SUCCESS = 'primary',
    ERROR = 'danger'
  }
}

export interface ItemEditMessagePresentation {
  message: string,
  className: string,
}

