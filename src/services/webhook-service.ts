import axios from 'axios'

export interface WebhookService {
    relayWebhook(body: any): Promise<void>
}

export class InternalWebhookService implements WebhookService {

    constructor(
        private readonly internalServiceUrl: string) {
    }

    async relayWebhook(body: any): Promise<void> {
        try {
            await axios.post(this.internalServiceUrl, body)
        } catch (error: unknown) {
            if (axios.isAxiosError(error)) {
                console.error(`internal-webhook-service.error-relaying-webhook[${error.response?.status}.${error.response?.data}]`)
            } else {
                console.error(`internal-webhook-service.unexpected-error[${error}]`)
            }
        }
    }
}