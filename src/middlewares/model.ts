import { ErrorResponse } from './error-middleware'

export namespace Api {

    export namespace Error {

        export const serverError: (debugMessage: string) => ErrorResponse = (debugMessage: string) => new ErrorResponse(500, 'E5000', debugMessage, true)
        export const clientError: (debugMessage: string) => ErrorResponse = (debugMessage: string) => new ErrorResponse(400, 'E4000', debugMessage, true)
        export const authorizationHeaderError: (debugMessage: string) => ErrorResponse = (debugMessage: string) => new ErrorResponse(401, 'E4001', `invalid-authorization.${debugMessage}`, true)

    }

}