export interface InternalServiceResponse {
    status: number
    message: string
}

export namespace ErrorResponseCode {

    const ERROR_RESPONSE_CODES = [400, 500, 502, 503] as const
    export type ErrorResponseCode = typeof ERROR_RESPONSE_CODES[number]

    export function values(): ErrorResponseCode[] {
        return [...ERROR_RESPONSE_CODES]
    }
}