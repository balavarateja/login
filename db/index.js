const mongoose = require('mongoose')
mongoose
  .connect(
    'mongodb+srv://sanjay1234:sanjay1234@cluster0.awectih.mongodb.net/?retryWrites=true&w=majority'
  )
  .then(() => {
    console.log('db is connected')
  })
  .catch((err) => {
    console.log(err)
  })
