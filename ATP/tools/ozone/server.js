import { API } from './../../../Base/API.js'

export function getConfig(token) {
	return API.get('tools.ozone.server.getConfig', token)
}