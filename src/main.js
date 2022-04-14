const express = require('express')
const twofactor = require("node-2fa");
const path = require('path')
const app = express()

app.use(express.static(path.join(__dirname , 'public')))
app.use(express.urlencoded({
  extended: true
}))
app.use(express.json())

const port = 3000

app.get('/:towfa', (req, res) => {
  const newToken = twofactor.generateToken(req.params.towfa);
  res.json(newToken);
})
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname+'/index.html'))
})

app.listen(port, () => {})