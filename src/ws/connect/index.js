var saySwag = require('@architect/shared/say-swag.js')

// learn more about WebSocket functions here: https://arc.codes/primitives/ws
exports.handler = async function subscribe(payload) {
  console.log(`I'm in a websocket! ${saySwag()}`)
  return {statusCode: 200}
}