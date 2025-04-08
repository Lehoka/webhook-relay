#🛠️ Technical Plan

##🎯 Goal

Build a Webhook Relay Service using Node.js + TypeScript that:

Receives GitHub webhooks

Verifies their HMAC signature

Relays valid webhooks to an internal service

Handles network delays and random failures gracefully

##✅ Step-by-step Plan

Project Setup

Initialize project structure: /src, /services, /middlewares, /utils, etc.

Configure dotenv for environment variables

Webhook Receiver

Create an Express server with a /webhook POST endpoint

Use body-parser with a rawBody middleware for signature verification

Signature Verification

Implement SignatureVerifier utility

Use HMAC SHA256 for GitHub signature validation

Webhook Relay

Implement WebhookService to forward requests to an internal mock service

Use Axios for HTTP forwarding

Mock Internal Service

Separate Express server

Randomly delay 30% of requests (0-30s)

Randomly return error status codes (30% chance): 400, 500, 502, 503

Object-Oriented Architecture

Use classes for logic encapsulation

Implement manual Dependency Injection in /src/di/index.ts

GitHub Webhook Testing

Use ngrok to expose the local server to the public

Add ngrok URL to GitHub Webhook settings

#🔒 Assumptions & Challenges

Webhook payload is safely forwardable as-is

No retry queue implemented yet (future feature)

Proper handling of raw body for signature check is crucial

Internal service may randomly fail or delay

No persistent storage or logging for now

#✅ Test Plan

##🎯 Objective

Ensure system handles validation, forwarding, and failure scenarios correctly.

##🧪 Manual Testing

Use ngrok for public endpoint exposure

Test with GitHub "ping" and real webhook events (e.g., push, commit)

##🧰 Suggested Automated Tests

###1. SignatureVerifier Unit Tests

Valid signature → returns true

Invalid/missing signature → returns false

###2. WebhookMiddleware Integration Tests

Valid signature and successful relay → 200

Invalid signature → 400

Internal service fails → 500

###3. Load Testing with Vegeta

Sample Command:

echo "POST https://<ngrok-url>/webhook" | vegeta attack -rate=1000 -duration=10s | vegeta report

Metrics to Monitor:

Success vs Failure rate

Latency distribution