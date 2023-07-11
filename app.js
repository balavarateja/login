const express = require('express')
require('./db')
require('dotenv').config()

const userRouter = require('./routes/user')

const app = express()

const PORT = process.env.PORT || 8000

// app.get('/', (req, res) => {
//   res.send('<h1>Hello Express<h1/>')
// })

app.use(express.json())
app.use('/api/users', userRouter)

app.listen(PORT, () => {
  console.log(`app is running on port ${PORT}`)
})
