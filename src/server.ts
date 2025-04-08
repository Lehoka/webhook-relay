import express from 'express'
import { webhookController } from './controllers/webhook-controller'
import { internalServiceController } from './controllers/internal-service-controller'
import { errorMiddleware } from './middlewares/error-middleware'
import bodyParser from 'body-parser'

const server = express()

server.use(
    bodyParser.json({
        verify: (req: any, _res, buf) => {
            req.rawBody = buf
        },
    })
)

server.use('/webhook', webhookController)
server.use('/internal', internalServiceController)

server.use(errorMiddleware)

export default server