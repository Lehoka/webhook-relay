import { GITHUB_WEBHOOK_SECRET, INTERNAL_SERVICE_URL } from '../config'
import { InternalService } from '../services/internal-service'
import { InternalWebhookService, WebhookService } from '../services/webhook-service'
import { GithubWebhookSignatureVerifier, SignatureVerifier } from '../utils/signature-verifier'

export let internalService: InternalService
export let signatureVerifier: SignatureVerifier
export let webhookService: WebhookService

export function initializeDependencies() {
    internalService = new InternalService()
    signatureVerifier = new GithubWebhookSignatureVerifier(GITHUB_WEBHOOK_SECRET)
    webhookService = new InternalWebhookService(INTERNAL_SERVICE_URL)

}