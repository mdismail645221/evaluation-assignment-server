const express = require('express');
const app = express()
const port = process.env.PROT || 5000;

app.get('/', (req, res) => {
  res.send(`Resolute AI Softwar's assignment server running`)
})





app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
