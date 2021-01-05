const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
  res.send('Stock service')
})

app.listen(port, () => {
  console.log(`Stock service app listening at http://localhost:${port}`)
})