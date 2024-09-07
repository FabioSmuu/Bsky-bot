import { API } from './../../../Base/API.js'

export function getPreferences(token) {
	return API.get('app.bsky.actor.getPreferences', token)
}

export function getProfile(token, did) {
	return API.get('app.bsky.actor.getProfile', token, { actor: did })
}

export function getProfiles(token, dids) {
	return API.get('app.bsky.actor.getProfiles', token, { actors: dids })
}

export function getSuggestions(token, limit = 50, cursor = '') {
	if (limit < 1 && limit > 100) return console.log('[ATP] app.bsky.actor.getSuggestions', 'limit (padrão 50) entre 1 a 100.')

	return API.get('app.bsky.actor.getSuggestions', token, { limit, cursor })

}

export function putPreferences(token) {
	/*
		https://docs.bsky.app/docs/api/app-bsky-actor-put-preferences

		Estou desenvolvendo a estrutura para o json ser mais flexivel.
	*/

	return

	const options = {
		preferences: [
			{ enabled: true }
		]
	}

	options.preferences.push({
		labelerDid: 'did do user', // se não indicado, será glboal.
		label: 'string',
		visibility: 'ignore' //ignore, show, warn, hide
	})

	options.preferences.push({
		pinned: [ 'at-uri' ],
		saved: [ 'at-uri' ],
		timelineIndex: 0
	})

	options.preferences.push({
		items: [{
			id: 'string',
			type: 'feed', // feed, list, timeline
			value: 'string',
			pinned: true
		}]
	})

	options.preferences.push({
		birthDate: '2024-09-04T00:26:09.275Z' // Data de nascimento do proprietaro da conta.
	})

	options.preferences.push({
		feed: 'string', // O URI do feed ou um identificador que descreve o feed.
		hideReplies: true, // Ocultar respostas no feed.
		hideRepliesByUnfollowed: true, // Ocultar respostas no feed se não forem de usuários seguidos
		hideRepliesByLikeCount: 0,
		hideReposts: true, // Ocultar republicações no feed.
		hideQuotePosts: true // Oculte postagens de citações no feed.
	})

	options.preferences.push({
		sort: 'oldest', // oldest, newest, most-likes, random // Modo de classificação para threads.
		prioritizeFollowedUsers: true // Mostre os usuários seguidos no topo de todas as respostas.
	})

	options.preferences.push({
		tags: [
			'string' // Tamanho maximo de string: 100.
		]
	})

	options.preferences.push({
		items: [{
			id: 'string',
			value: 'string', // A própria palavra silenciada. até 10000 caracteres.
			targets: [
				'content' // content, tag // até 640 caracteres.
			],
			actorTarget: 'all', // all, exclude-following // Grupos de usuários aos quais aplicar a palavra silenciada. Se indefinido, aplica-se a todos os usuários.
			expiresAt: '2024-09-04T00:26:09.275Z' // A data e hora em que a palavra silenciada expirará e não será mais aplicada.
		}]
	})

	options.preferences.push({
		items: [
			'at-uri'
		]
	})

	options.preferences.push({
		activeProgressGuide: { // Se definido, um guia de progresso ativo. Depois de concluído, pode ser definido como indefinido. Deveria ter campos não especificados acompanhando o progresso.
			guide: 'string' // até 100 caracteres.
		},
		queuedNudges: [ // tamanho: 1000
			'string'
		]
	})

	options.preferences.push({
		labelers: [{
			'did': 'string'
		}]
	})

	return API.post('app.bsky.actor.putPreferences', token, options)
}

export function searchActorsTypeahead(token, search, limit = 10) {
	if (limit < 1 && limit > 100) return console.log('[ATP] app.bsky.actor.searchActorsTypeahead', 'limit (padrão 10) entre 1 a 100.')

	return API.get('app.bsky.actor.searchActorsTypeahead', token, { q: search, limit })
}

export function searchActors(token, search, limit = 25, cursor = '') {
	if (limit < 1 && limit > 100) return console.log('[ATP] app.bsky.actor.searchActors', 'limit (padrão 25) entre 1 a 100.')

	return API.get('app.bsky.actor.searchActors', token, { q: search, limit, cursor })
}