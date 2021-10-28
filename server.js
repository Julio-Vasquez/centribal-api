const createError = require('http-errors'),
  app = require('express')(),
  cors = require('cors')

const PORT = 8550

app.use(cors())
app.use('/', require('./src/routes/app.routes'))

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404))
})

// error handler
app.use((err, req, res, next) => {
  res.status(err.status || 500).send(err.message)
})

app.listen(PORT, () => console.log(`server running on port: ${PORT}`))
