const typeClassNames = {
  error: 'danger',
  info:  'info'
};

class StatusMessage {
  constructor(message) {
    this.text = message.text;
    this.type = message.type;
    this.className = typeClassNames[message.type]
  }
}

export default StatusMessage;

