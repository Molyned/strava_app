const express = require('express')
const app = express()
const port = process.env.PORT || 5000

/* 
    Incase you are using mongodb atlas database uncomment below line
    and replace "mongoAtlasUri" with your mongodb atlas uri.
*/
// mongoose.connect( mongoAtlasUri, {useNewUrlParser: true, useUnifiedTopology: true})

app.get('/', (req, res) => {
  res.send('This is the backend/frontend to my strava app! Here is where I will develop.')
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})