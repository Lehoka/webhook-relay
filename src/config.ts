
import dotenv from 'dotenv'
dotenv.config()

export const SERVER_PORT = process.env.SERVER_PORT ?? 3080

export const GITHUB_WEBHOOK_SECRET = process.env.GITHUB_WEBHOOK_SECRET ?? ''

export const INTERNAL_SERVICE_URL = process.env.WEBHOOK_URL ?? ''