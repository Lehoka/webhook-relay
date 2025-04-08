import express, { Request, Response } from 'express'
import { signatureVerifier, webhookService } from '../dependencies'
import { Delayer } from '../utils/delayer'
import { Api } from '../middlewares/model'

export const webhookController = express.Router()

webhookController.post('/', (req: Request, res: Response) => {
    if (!signatureVerifier.verifySignature(req)) {
        throw Api.Error.authorizationHeaderError('invalid-signature')
    }

    const maxMilliseconds = 30000
    Delayer.randomDelay(maxMilliseconds)

    try {
        webhookService.relayWebhook(req.body)
        res.status(200).send('Webhook relayed')
    } catch (err: unknown) {
        throw Api.Error.serverError('unknown-error.failed-to-relay-webhook')
    }
})