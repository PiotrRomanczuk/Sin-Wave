//-----------------------------------------------------------------------------------------------------------------------//
//                                                                                                                       //
//                                  Browser WebSockets have slightly different syntax than `ws`.                         //
//                                  Instead of EventEmitter syntax `on('open')`, you assign a callback                   //
//                                  to the `onopen` property.                                                            //
//                                                                                                                       //
//                                                                                                                       //
//                                                                                                                       //
//-----------------------------------------------------------------------------------------------------------------------//

var fs = require('fs');
const document = fs.readFile('websocket.html')


const ws = new WebSocket('ws://localhost:12000');

ws.onopen = function() {                                                      // Open a new WebSocket
  document.querySelector('#send').disabled = false;                           //

    document.querySelector('#send').addEventListener('click', function () {   //
        document.querySelector('#mirror').innerHTML =                         //
            document.querySelector('#message').value;                         //
        
        ws.send(document.querySelector('#message').value);                    //
  });
};
  
ws.onmessage = function(msg) {                                                //
  document.querySelector('#messages').innerHTML = `<div>${msg.data}</div>`;   //
};