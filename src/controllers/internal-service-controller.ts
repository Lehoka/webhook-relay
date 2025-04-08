import express, { Request, Response } from 'express'
import { internalService } from '../dependencies'
import { Api } from '../middlewares/model'

export const internalServiceController = express.Router()

internalServiceController.post('/', async (_: Request, res: Response) => {
    try {
        const result = await internalService.processWebhook()
        res.status(result.status).send(result.message)
    } catch (err: unknown) {
        throw Api.Error.serverError('error.failed-to-process-webhook')
    }
})