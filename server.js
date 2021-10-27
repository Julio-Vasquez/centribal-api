const app = require('express')(),
  cors = require('cors')

const PORT = 8550

app.use(cors())

app.use('/', require('./src/routes/app.routes'))

app.listen(PORT, () => console.log(`server running on port: ${PORT}`))
