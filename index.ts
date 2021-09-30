//const { console } = require('console');
import http from 'http';
import fs from 'fs';

//const express = require('express');

const hostname: string = '127.0.0.1'; //out local computer
const port: number = 3000;

const server: http.Server = http.createServer((req,res) => {
    //res.statusCode = 200;//http response protocol code; don't need this line
    res.setHeader('Content-Type', 'text/html');
   displayHome(res);
});
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
});

function displayHome (res:http.ServerResponse)
{

    fs.readFile("index.html", (err, data) => 
    {
        if(err)
        {
            res.writeHead(404);
            res.end('ERROR: 404 PAGE NOT FOUND');
            console.log('Error');
        }
        res.writeHead(200);
        res.end(data);
    })
}