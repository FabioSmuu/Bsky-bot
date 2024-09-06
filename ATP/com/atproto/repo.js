import { API } from './../../../Base/api.js';

export function applyWrites() {}

export function createRecord(did, token, text) {
	return API.post('com.atproto.repo.createRecord', token, {
		$type: 'app.bsky.feed.post',
		repo: did,
		collection: 'app.bsky.feed.post',
		record: { text, createdAt: new Date().toISOString() }
		// record: { text, createdAt: '2000-10-10T10:00:01.684Z' }

	})
}

export function deleteRecord() {}
export function describeRepo() {}
export function getRecord() {}
export function importRepo() {}
export function listMissingBlobs() {}
export function listRecords() {}
export function putRecord() {}
export function uploadBlob() {}