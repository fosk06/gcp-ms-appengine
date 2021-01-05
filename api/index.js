const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
  res.send(' api service')
})

app.listen(port, () => {
  console.log(`api service app listening at http://localhost:${port}`)
})