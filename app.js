import ATP from './ATP/index.js'
// console.log(ATP)

const { did, handle, accessJwt: token } = await ATP.com.atproto.server.createSession(process.env.IDENTIFIER, process.env.PASSWORD)
console.log(`Olá ${handle} [${did}]`)

const teste = await ATP.app.bsky.actor.getProfile('fabiosmuu.bsky.social', token)
console.log(teste)

// const teste = await ATP.com.atproto.repo.createRecord(did, token, 'Sou um viajante do tempo !')
// console.log(teste)

/*


import { Client } from './Base/Client.js'
console.log(Client)

const bot = new Client()
//bot.session(process.env.JWT)
bot.login(process.env.IDENTIFIER, process.env.PASSWORD)

bot.post({
	context: 'exemplo de post.'
]})


*/