const express = require('express')
const app = express()

// Heroku dynamically sets a port
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))
// start app in a wrong port
app.listen(PORT + 1, () => {
  // this_causes_error
  // eslint-disable-next-line no-console
  console.log('server started on port ${PORT}')
})

app.get('/health', (req, res) => {
  // throw 'error...'
  res.send('ok')
})

app.get('/version', (req, res) => {
  res.send('2') // change this string to ensure a new version deployed
})
