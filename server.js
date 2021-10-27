const createError = require('http-errors'),
  app = require('express')(),
  cors = require('cors')

const PORT = 8550

app.use(cors())

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404))
})

// error handler
app.use((err, req, res, next) => {
  res.locals.message = err.message
  res.send({ status: err.status || 500, message: err.message })
})

app.use('/', require('./src/routes/app.routes'))

app.listen(PORT, () => console.log(`server running on port: ${PORT}`))
