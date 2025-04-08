import { InternalServiceResponse, ErrorResponseCode } from './model'

export class InternalService {

    async processWebhook(): Promise<InternalServiceResponse> {
        // Random delay
        if (Math.random() < 0.3) {
            const delay = Math.floor(Math.random() * 30000)
            console.log(`internal-service.delaying[${delay}]ms`)
            await new Promise(resolve => setTimeout(resolve, delay))
        }

        // Random error response
        if (Math.random() < 0.3) {
            const responseCodes = ErrorResponseCode.values()
            const randomResponseCode = responseCodes[Math.floor(Math.random() * responseCodes.length)]
            console.log(`internal-service.responding-with-error-code[${randomResponseCode}]`)
            return { status: randomResponseCode, message: 'Simulated error' }
        }

        console.log('internal-service.webhook-processed')
        return { status: 200, message: '✅ Webhook processed' }
    }

}