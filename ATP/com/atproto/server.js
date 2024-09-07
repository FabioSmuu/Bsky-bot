import { API } from './../../../Base/API.js'

export function activateAccount() {}
export function checkAccountStatus() {}
export function confirmEmail() {}
export function createAccount() {}
export function createAppPassword() {}
export function createInviteCode() {}
export function createInviteCodes() {}

export function createSession(identifier, password, authFactorToken = '') {
	return API.post('com.atproto.server.createSession', false, { identifier, password })
}

export function deactivateAccount() {}
export function deleteAccount() {}
export function deleteSession() {}
export function describeServer() {}
export function getAccountInviteCodes() {}
export function getServiceAuth() {}
export function getSession() {}
export function listAppPasswords() {}
export function refreshSession() {}
export function requestAccountDelete() {}
export function requestEmailConfirmation() {}
export function requestEmailUpdate() {}
export function requestPasswordReset() {}
export function reserveSigningKey() {}
export function resetPassword() {}
export function revokeAppPassword() {}
export function updateEmail() {}