import { AppDataSource } from './data-source'
import app from './app'

async function main () {
  const PORT = process.env.SERVER_PORT || 4000

  try {
    app.listen(PORT, () => console.log(`Server on port: ${PORT}`))
    await AppDataSource.initialize()
    console.log('Conectado a la base de datos')
  } catch (error) {
    console.log(error)
  }
}

main()
