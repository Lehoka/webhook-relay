import { SERVER_PORT } from './config'
import { initializeDependencies } from './dependencies'
import server from './server'

initializeDependencies()

server.listen(SERVER_PORT, () => {
    console.log(`Server listening on port ${SERVER_PORT}`)
})