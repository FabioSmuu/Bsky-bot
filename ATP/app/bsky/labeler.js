import { API } from './../../../Base/API.js'

export function getServices(token, dids) {
	if (Array.isArray(dids)) return API.get('app.bsky.labeler.getServices', token, dids)
}