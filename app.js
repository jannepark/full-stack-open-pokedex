const express = require('express')
const app = express()

// Heroku dynamically sets a port
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))
app.listen(PORT, () => {
  // this_causes_error
  // eslint-disable-next-line no-console
  console.log('server started on port ${PORT}')
  console.log('some changes for 11.13')
})

app.get('/health', (req, res) => {
  // throw 'error...'
  // eslint-disable-next-line no-constant-condition
  // eslint-disable-next-line no-console
  console.log('*health check')
  // if (true)
  //   throw 'error...*  '
  res.send('ok')
})

app.get('/version', (req, res) => {
  res.send('2') // change this string to ensure a new version deployed
})
