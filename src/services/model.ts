export interface InternalServiceResponse {
    status: number
    message: string
}

export namespace ResponseCodes {

    const RESPONSE_CODES = [400, 500, 502, 503] as const
    export type ResponseCode = typeof RESPONSE_CODES[number]

    export function values(): ResponseCode[] {
        return Array.from(RESPONSE_CODES)
    }
}