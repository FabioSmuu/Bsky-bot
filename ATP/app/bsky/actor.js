import { API } from './../../../Base/api.js';

export function getPreferences() {}

export function getProfile(did, token) {
	return API.get('app.bsky.actor.getProfile', token, { actor: did })
}

export function getProfiles() {}
export function getSuggestions() {}
export function putPreferences() {}
export function searchActorsTypeahead() {}
export function searchActors() {}