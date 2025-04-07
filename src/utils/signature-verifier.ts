import crypto from 'crypto'
import { Request } from 'express'

export interface SignatureVerifier {
    verifySignature(req: Request): boolean
}

export class GithubWebhookSignatureVerifier implements SignatureVerifier {

    constructor(
        private readonly secret: string) {
    }

    verifySignature(req: Request): boolean {
        const signature = req.headers['x-hub-signature-256'];
        if (!signature || typeof signature !== 'string') return false;
    
        const hash = crypto
          .createHmac('sha256', this.secret)
          .update((req as any).rawBody)
          .digest('hex');
    
        return signature === `sha256=${hash}`
      }

}