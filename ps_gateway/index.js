const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
  res.send(' ps_gateway service')
})

app.listen(port, () => {
  console.log(`ps_gateway service app listening at http://localhost:${port}`)
})