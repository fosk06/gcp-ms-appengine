const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
  res.send(' shipping_bo service')
})

app.listen(port, () => {
  console.log(`shipping_bo service app listening at http://localhost:${port}`)
})