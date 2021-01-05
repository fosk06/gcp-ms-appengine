const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
  res.send(' frship_aftership_gateway service')
})

app.listen(port, () => {
  console.log(`frship_aftership_gateway service app listening at http://localhost:${port}`)
})