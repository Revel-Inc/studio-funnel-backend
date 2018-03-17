const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')
const path = require('path')

const app = express()
app.use(bodyParser.json())
app.use(morgan('dev'))
app.use(cors())
app.disable('x-powered-by')
app.disable('etag')

// const {
//   authRouter,
//   usersRouter,
//   projectsRouter
// } = require('./routes')

// app.use('/api/auth', authRouter)
// app.use('/api/users', usersRouter)
// app.use('/api/projects', projectsRouter)

app.use((req, res) => {
  const status = 404
  const messsage = `Could not ${req.method} ${req.path}`
  res.status(status).json({ status, message })
})

app.use((err, _req, res, _next) => {
  console.log(err);
  const status = err.status || 500
  const message = err.message || 'Sorry, something borked out!'
  res.status(status).json({ status, message })
})

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})
