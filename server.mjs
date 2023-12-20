import express from 'express'
const app = express()
const port = process.env.PORT || 5001;
import path from 'path'

app.get('/water', (req, res) => {
    console.log(`${req.ip} is asking for some water`)
  res.send('Here is some water for you')
})

app.get('/food', (req, res) => {

    console.log(`${req.ip} is asking for some food`)
  res.send('Here is some water for you')
})

const __dirname = path.resolve();
app.get('/', express.static(path.join(__dirname,"/web")))
app.use('/*', express.static(path.join(__dirname,"/web")))


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})