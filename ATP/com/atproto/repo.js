import { API } from './../../../Base/API.js'

export function applyWrites() {}

export function createRecord(token, did, post) {
	const { text, reply } = post
	const record = {
		text: '',

	}

	if (text) record.text = text
	if (reply) {
		const { root, parent } = reply
		record.reply = {
			root: {
				uri: root.uri,
				cid: root.cid
			},
			parent: {
				uri: parent.uri,
				cid: parent.cid
			}
		}
	}

	return API.post('com.atproto.repo.createRecord', token, {
		repo: did,
		collection: 'app.bsky.feed.post',
		record: { text }
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