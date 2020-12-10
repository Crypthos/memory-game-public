import {io} from "socket.io-client";

io.on('message', message => {
  console.log(message)
});
