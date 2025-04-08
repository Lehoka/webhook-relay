import crypto from 'crypto'
import { Request } from 'express'

interface GithubWebhookRequest extends Request {
    rawBody: string | Buffer
}

export interface SignatureVerifier {
    verifySignature(req: Request): boolean
}

export class GithubWebhookSignatureVerifier implements SignatureVerifier {

    constructor(
        private readonly secret: string) {
    }

    verifySignature(req: GithubWebhookRequest): boolean {
        const signature = req.headers['x-hub-signature-256']
        if (!signature || typeof signature !== 'string') return false
    
        const hash = crypto
          .createHmac('sha256', this.secret)
          .update(req.rawBody)
          .digest('hex')
    
        return signature === `sha256=${hash}`
      }

}