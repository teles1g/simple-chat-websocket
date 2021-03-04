import socketio from 'socket.io';

class Socket {
  constructor(server) {
    this.socket = socketio(server);

    this.connect();
  }

  connect() {
    this.socket.on('connection', socket => {
      socket.on('send-message', message => {
        this.socket.emit('receive-message', message);
      });
    });
  }
}

export default Socket;
