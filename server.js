var unirest = require('unirest');
var http = require('http')
var auth = require('basic-auth')
var request = require('request')

// Create server
var server = http.createServer(function (req, res) {
  var credentials = auth(req)

  if (!credentials || credentials.name !== 'user' || credentials.pass !== 'pa55word') {
    res.statusCode = 401
    res.error = 'Unaothorized'
    res.message = "Bad username or password"
    console.log(res)
    res.end('{"statusCode": "401", "error": "Unauthorized", "message": "Bas user name or password", "attributes": { "error": "Bad username or password"}}')
  } else {
    // console.log(res)    // res.end('Access granted')
    res.end('{"statusCode": "200"}')

  }
})

server.listen(3000)
