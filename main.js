const { app, BrowserWindow } = require('electron')

let win;

function createWindow () {
  win = new BrowserWindow({
    width: 1536,
    height: 910,
    backgroundColor: '#111',
    icon: `file://${__dirname}/dist/assets/logo.png`
  })


  win.loadURL(`file://${__dirname}/dist/index.html`)
//  win.loadURL('http://localhost:4200')

  win.on('closed', function () {
    win = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', function () {

  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  if (win === null) {
    createWindow()
  }
})

// server

var express = require('express')
var server = express()
var fs = require('file-system')
var bodyParser = require('body-parser')

server.use(bodyParser.json({limit: '50mb'}))
server.use(bodyParser.urlencoded({ limit: '500mb', extended: true }))

var port = 3000

server.use( (req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST')
  res.setHeader('Access-Control-Allow-Headers', 'X-Request-With, content-type')
  next()
})

server.use(express.static('server'))

// Rutas

server.get('/', (req, res) => {
  var scoreData = JSON.stringify( fs.readFileSync('./server/data.json', 'utf-8') )
  res.send(scoreData)
  res.end()
})

server.get('/time', (req, res) => {
  var data = JSON.stringify( fs.readFileSync('./server/time.json', 'utf-8') )
  res.send(data)
  res.end()
})

server.post('/', (req, res) => {
  score = JSON.stringify(req.body)
  fs.writeFile('./server/data.json', score)
  console.log(score)
  res.send('success')
  res.end()
})

server.post('/time', (req, res) => {
  time = JSON.stringify(req.body)
  fs.writeFile('./server/time.json', time)
  console.log(time)
  res.send('success')
  res.end
})

server.post('/media', (req, res) => {
  media = JSON.stringify(req.body)
  fs.writeFile('./server/media.json', media)
  console.log('imagen cargada')
  res.send('success')
  res.end
})

server.get('/media', (req, res) => {
  var data = JSON.stringify( fs.readFileSync('./server/media.json', 'utf-8') )
  res.send(data)
  res.end
})

server.get('/control', (req, res) => {
  var data = fs.readFileSync('./dist/control.html', 'utf-8')
  res.send(data)
  res.end()
})

server.get('/:file', (req, res) => {
  var data = fs.readFileSync('./dist/' + req.params.file, 'utf-8')
  res.send(data)
  res.end()
})

server.listen(port, () => {
  console.log('works in: ' + port)
})


