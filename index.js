"use strict"

const express = require('express')
const app  = express()
const port = 3000

const sseExpress = require('sse-express')

const fs = require('fs')

const clientHTML = function (){
  let html = fs.readFileSync('./client.html')
  return html
}

let counter = 0

console.log(clientHTML().toString('utf8'))

app.get('/updates', sseExpress, (request, response) =>{
  response.sse('message', {
    welcomeMsg: 'Hello world!',
    msgCount : counter.toString()
  })

  ++counter
  console.log("Received update request.Sent back ", {
    welcomeMsg: 'Hello world!',
    msgCount : counter.toString()
  })
})

app.get('/', (request, response) => {
  console.log("get received... sending \r\n", clientHTML().toString('utf8'))
  response.setHeader("Content-Type", "text/html")
  response.send(clientHTML())
})

app.listen(port, (err)=>{
  if(err){
    return console.log('Something bad happened', err)
  }

  console.log('server is listening on port ', port)
})


/* straight up node
const http = require('http')
const port = 3000

const requestHandler = (request, response) => {
  console.log(request.url)
  response.end('Hello Node.Js Server')
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
  if(err){
    return console.log('something bad happened', err)
  }

  console.log('server is listening on', port)
})
*/
