import express from 'express'
import bodyParser from 'body-parser'

const server = express()

// Save raw body for GitHub signature verification
server.use(bodyParser.json({
    verify: (req: any, _res, buf) => {
        req.rawBody = buf
    }
}))

export default server