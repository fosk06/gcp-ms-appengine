const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
  res.send('notification service')
})

app.listen(port, () => {
  console.log(`notification service app listening at http://localhost:${port}`)
})