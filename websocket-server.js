console.log("start"); // first test console.log 

<link rel="stylesheet" href='./styles.css'></link>

        // Websocket //

const WebSocket = require('ws');        
const server = new WebSocket.Server({       
    port: 12000
        });

        // Express //

const express = require('express');
const app = express();

var fs = require('fs'); // fs - as a "file system module"


// Empty array 
sockets = [];
// Timer with const -1 
timerId = -1;


// Server ON with one parametter socket - as an one single var of the empty array
server.on('connection', function (socket) {


    sockets.push(socket); // Dependency between sockets and socket

    socket.on('message', function (msg) {   // Message on socket sent with function with parametter "msg"
        {
            console.log(msg.toString());    //   console.log a message as a string
            sockets.forEach(                //  
                s => s.send                 //  Each socket sents a msg as a string 
                    (msg.toString())        //          (to each other!)
                        ); 
        }
    });

    // When a socket closes, or disconnects, remove it from the array.
    socket.on('close', function () {                    // 
        sockets = sockets.filter(s => s !== socket);    // ??? s => s !== socket ???
        if ( timerId >= 0)                              // Always True
            clearTimeout(timerId);                      // Clear timer
    });
});



//      ---Node.JS config---     //


app.get('/', function (req, res) {                              //  Express app gets to evrth with function (req, res)
    console.log("main page");                                   //  Test console.log                                
    fs.readFile('websocket.html', function (err, data) {        //  App read file html with function (err, data)
        console.log(err);                                       //  ??? no error - no console.log? ???
        res.writeHead(200, { 'Content-Type': 'text/html' });    //  Response write head
        res.write(data);                                        //  Response write data 
        console.log(data);                                      //  ??? console.log where ???
        return res.end();                                       //  Return end of writing
    })
});




                                                                //-------------------------------------------------//
app.get('/draw.html', function (req, res) {                     //                                                 //
    fs.readFile('draw.html', function (err, data) {             //      ???  Express app gets to the file  ???     //
        res.writeHead(200, { 'Content-Type': 'text/html' });    //      ???         that dosn't exist      ???     //
        res.write(data);                                        //                                                 //
        return res.end();                                       //-------------------------------------------------//
    })
});

app.listen(1337, function () {                                      // App listen Port //    
    console.log('Server listening on http://localhost:' + 1337);
})

console.log("String")       // Test console.log