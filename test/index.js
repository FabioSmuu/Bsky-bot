import { ATP } from '../app.js'

// Gerar uma token de acesso para as requisições.
const { createSession } = ATP.com.atproto.server
const { did, handle, accessJwt: token } = await createSession(process.env.IDENTIFIER, process.env.PASSWORD)
console.log(`Olá ${handle} [${did}]`)
console.log(`\n${token}\n`)
/*
const getPreferences = await ATP.app.bsky.actor.getPreferences(token)
console.log(getPreferences)

const getProfile = await ATP.app.bsky.actor.getProfile(token, 'fabiosmuu.bsky.social')
console.log(getProfile)

const getProfiles = await ATP.app.bsky.actor.getProfiles(token, ['fabiosmuu.bsky.social', 'bolhadev.com'])
console.log(getProfiles)

const getProfiles = await ATP.app.bsky.actor.getSuggestions(token, 6, '0')
console.log(getProfiles)

const searchActorsTypeahead = await ATP.app.bsky.actor.searchActorsTypeahead(token, 'fabiosmuu')
console.log(searchActorsTypeahead)









/*
const teste = await ATP.com.atproto.repo.createRecord(token, did, {
	text: 'Sou um viajante do tempo !'
})

 console.log(teste)
*/