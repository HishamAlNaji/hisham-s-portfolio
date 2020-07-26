'use strict';

const express = require('express');

const server = express();

const PORT = process.env.PORT || 2000;

server.listen(PORT, () => {
    console.log('i am listening to the port', PORT)
});


// server.get("/test", (request, response) => {
//     response.send("You are awesome!");
// });

// localhost: 3000 / data
// server.get("/data", (request, response) => {
//     let cars = [{
//             name: "ferrary",
//         },
//         {
//             name: "ford",
//         }
//     ];
//     response.json(cars);
// });