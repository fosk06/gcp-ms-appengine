const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
  res.send('No default service available')
})

app.listen(port, () => {
  console.log(`default service app listening at http://localhost:${port}`)
})