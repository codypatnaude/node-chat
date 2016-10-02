"use strict"

const express = require('express')
const app  = express()
const port = 3000

app.get('/', (request, response) => {
  console.log(request)
  response.send('Hello from express!')
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
