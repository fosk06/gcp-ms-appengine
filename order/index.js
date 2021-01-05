const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
  res.send('Order service')
})

app.listen(port, () => {
  console.log(`Order service app listening at http://localhost:${port}`)
})