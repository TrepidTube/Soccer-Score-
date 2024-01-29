var express = require('express')
var app = express()
var fs = require('file-system')
var bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

var port = 3000

app.use( (req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST')
  res.setHeader('Access-Control-Allow-Headers', 'X-Request-With, content-type')
  next()
})

// Rutas

app.get('/', (req, res) => {
  var scoreData = JSON.stringify( fs.readFileSync('./data.json', 'utf-8') )
  res.send(scoreData)
  res.end()
})

app.post('/', (req, res) => {
  score = JSON.stringify(req.body)
  res.send('posted')
  res.end();
  writeScore(score)
  console.log(score)
})

app.listen(port, () => {
  console.log('works in: ' + port)
})

var writeScore = (scoreFile) => {
  fs.writeFile('./data.json', scoreFile)
}
