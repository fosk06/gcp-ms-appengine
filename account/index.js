const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
  res.send('Account service')
})

app.listen(port, () => {
  console.log(`Account service app listening at http://localhost:${port}`)
})