// app.ts
import express from 'express'
import { AppDataSource } from './src/configs/db.config'
import arzRoutes from './src/routes/arz.route'

const port = 3006
const app = express()

AppDataSource.initialize()
  .then(() => {
    app.use('/api', arzRoutes)

    app.listen(port, () => {
      console.log(`Server is running on port ${port}`)
    })
  })
  .catch((error) => console.log(error))
