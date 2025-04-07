import { InternalServiceResponse, ResponseCodes } from './model'

export class InternalService {

    async processWebhook(): Promise<InternalServiceResponse> {
        // Random delay
        if (Math.random() < 0.3) {
            const delay = Math.floor(Math.random() * 30000)
            console.log(`[InternalService] Delaying ${delay}ms`)
            await new Promise(resolve => setTimeout(resolve, delay))
        }

        // Random error response
        if (Math.random() < 0.3) {
            const responseCodes = ResponseCodes.values()
            const randomResponseCode = responseCodes[Math.floor(Math.random() * responseCodes.length)]
            console.log(`[InternalService] Responding with error ${randomResponseCode}`)
            return { status: randomResponseCode, message: 'Simulated error' }
        }

        console.log('[InternalService] ✅ Webhook processed')
        return { status: 200, message: 'OK' }
    }

}