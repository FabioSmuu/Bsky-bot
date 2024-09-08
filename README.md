# Base para bot [BlueSky](https://bsky.app/profile/fabiosmuu.bsky.social).
Construir esta base em cima da [API Oficial da BlueSky](https://docs.bsky.app/docs/api/at-protocol-xrpc-api).

> **Observação** A senha no arquivo. env deste repositório se trata de uma senha temporaria desativada.

<br>

> **Aviso**: Por segurança é recomendado a criação de uma senha genérica em:

[Configurações > Senhas de Aplicativos > Adicionar Senha de Aplicativo](https://bsky.app/settings/app-passwords)

<br>

### Exemplo de uso
```js
import { ATP } from '../app.js'

const { createSession } = ATP.com.atproto.server
const { did, handle, accessJwt: token } = await createSession(process.env.IDENTIFIER, process.env.PASSWORD)

console.log(`Olá ${handle} [${did}]`)
// Saida: Olá bot-fabio.bsky.social [did:plc:75tklmxmaeod3mppx3zvoqjw]

const sendPost = await ATP.com.atproto.repo.createRecord(token, did, {
	text: 'Post enviado por API'
})
```

<br>

### Lista de Desenvolvimento
> Confira quais os estados de desenvolvimento da base.

app.bsky | Desenvolvimento | Documentação Oficial
-|-|-
|**actor**|
actor.getPreferences | 🟩 Concluido | [getPreferences](https://docs.bsky.app/docs/api/app-bsky-actor-get-preferences)
actor.getProfile | 🟩 Concluido | [getProfile](https://docs.bsky.app/docs/api/app-bsky-actor-get-profile)
actor.getProfiles | 🟩 Concluido | [getProfiles](https://docs.bsky.app/docs/api/app-bsky-actor-get-profiles)
actor.getSuggestions | 🟩 Concluido | [getSuggestions](https://docs.bsky.app/docs/api/app-bsky-actor-get-suggestions)
actor.searchActorsTypeahead | 🟨 Em Andamento | [searchActorsTypeahead](https://docs.bsky.app/docs/api/app-bsky-actor-search-actors-typeahead)
actor.searchActors | 🟩 Concluido | [searchActors](https://docs.bsky.app/docs/api/app-bsky-actor-search-actors)
|**feed**|
feed.describeFeedGenerator | 🟥 Incompleto | [describeFeedGenerator](https://docs.bsky.app/docs/api/app-bsky-feed-describe-feed-generator)
feed.getActorFeeds | 🟥 Incompleto | [getActorFeeds](https://docs.bsky.app/docs/api/app-bsky-feed-get-actor-feeds)
feed.getActorLikes | 🟥 Incompleto | [getActorLikes](https://docs.bsky.app/docs/api/app-bsky-feed-get-actor-likes)
feed.getAuthorFeed | 🟥 Incompleto | [getAuthorFeed](https://docs.bsky.app/docs/api/app-bsky-feed-get-author-feed)
feed.getFeedGenerator | 🟥 Incompleto | [getFeedGenerator](https://docs.bsky.app/docs/api/app-bsky-feed-get-feed-generator)
feed.getFeedGenerators | 🟥 Incompleto | [getFeedGenerators](https://docs.bsky.app/docs/api/app-bsky-feed-get-feed-generators)
feed.getFeedSkeleton | 🟥 Incompleto | [getFeedSkeleton](https://docs.bsky.app/docs/api/app-bsky-feed-get-feed-skeleton)
feed.getFeed | 🟥 Incompleto | [getFeed](https://docs.bsky.app/docs/api/app-bsky-feed-get-feed)
feed.getLikes | 🟥 Incompleto | [getLikes](https://docs.bsky.app/docs/api/app-bsky-feed-get-likes)
feed.getListFeed | 🟥 Incompleto | [getListFeed](https://docs.bsky.app/docs/api/app-bsky-feed-get-list-feed)
feed.getPostThread | 🟥 Incompleto | [getPostThread](https://docs.bsky.app/docs/api/app-bsky-feed-get-post-thread)
feed.getPosts | 🟥 Incompleto | [getPosts](https://docs.bsky.app/docs/api/app-bsky-feed-get-posts)
feed.getQuotes | 🟥 Incompleto | [getQuotes](https://docs.bsky.app/docs/api/app-bsky-feed-get-quotes)
feed.getRepostedBy | 🟥 Incompleto | [getRepostedBy](https://docs.bsky.app/docs/api/app-bsky-feed-get-reposted-by)
feed.getSuggestedFeeds | 🟥 Incompleto | [getSuggestedFeeds](https://docs.bsky.app/docs/api/app-bsky-feed-get-suggested-feeds)
feed.getTimeline | 🟥 Incompleto | [getTimeline](https://docs.bsky.app/docs/api/app-bsky-feed-get-timeline)
feed.searchPosts | 🟥 Incompleto | [searchPosts](https://docs.bsky.app/docs/api/app-bsky-feed-search-posts)
feed.sendInteractions | 🟥 Incompleto | [sendInteractions](https://docs.bsky.app/docs/api/app-bsky-feed-send-interactions)
|**graph**|
graph.getActorStarterPacks | 🟥 Incompleto | [getActorStarterPacks](https://docs.bsky.app/docs/api/app-bsky-graph-get-actor-starter-packs)
graph.getBlocks | 🟥 Incompleto | [getBlocks](https://docs.bsky.app/docs/api/app-bsky-graph-get-blocks)
graph.getFollowers | 🟥 Incompleto | [getFollowers](https://docs.bsky.app/docs/api/app-bsky-graph-get-followers)
graph.getFollows | 🟥 Incompleto | [getFollows](https://docs.bsky.app/docs/api/app-bsky-graph-get-follows)
graph.getKnownFollowers | 🟥 Incompleto | [getKnownFollowers](https://docs.bsky.app/docs/api/app-bsky-graph-get-known-followers)
graph.getListBlocks | 🟥 Incompleto | [getListBlocks](https://docs.bsky.app/docs/api/app-bsky-graph-get-list-blocks)
graph.getListMutes | 🟥 Incompleto | [getListMutes](https://docs.bsky.app/docs/api/app-bsky-graph-get-list-mutes)
graph.getList | 🟥 Incompleto | [getList](https://docs.bsky.app/docs/api/app-bsky-graph-get-list)
graph.getLists | 🟥 Incompleto | [getLists](https://docs.bsky.app/docs/api/app-bsky-graph-get-lists)
graph.getMutes | 🟥 Incompleto | [getMutes](https://docs.bsky.app/docs/api/app-bsky-graph-get-mutes)
graph.getRelationships | 🟥 Incompleto | [getRelationships](https://docs.bsky.app/docs/api/app-bsky-graph-get-relationships)
graph.getStarterPack | 🟥 Incompleto | [getStarterPack](https://docs.bsky.app/docs/api/app-bsky-graph-get-starter-pack)
graph.getStarterPacks | 🟥 Incompleto | [getStarterPacks](https://docs.bsky.app/docs/api/app-bsky-graph-get-starter-packs)
graph.getSuggestedFollowsByActor | 🟥 Incompleto | [getSuggestedFollowsByActor](https://docs.bsky.app/docs/api/app-bsky-graph-get-suggested-follows-by-actor)
graph.muteActorList | 🟥 Incompleto | [muteActorList](https://docs.bsky.app/docs/api/app-bsky-graph-mute-actor-list)
graph.muteActor | 🟥 Incompleto | [muteActor](https://docs.bsky.app/docs/api/app-bsky-graph-mute-actor)
graph.muteThread | 🟥 Incompleto | [muteThread](https://docs.bsky.app/docs/api/app-bsky-graph-mute-thread)
graph.unmuteActorList | 🟥 Incompleto | [unmuteActorList](https://docs.bsky.app/docs/api/app-bsky-graph-unmute-actor-list)
graph.unmuteActor | 🟥 Incompleto | [unmuteActor](https://docs.bsky.app/docs/api/app-bsky-graph-unmute-actor)
graph.unmuteThread | 🟥 Incompleto | [unmuteThread](https://docs.bsky.app/docs/api/app-bsky-graph-unmute-thread)
|**labeler**|
labeler.getServices | 🟩 Concluido | [getServices](https://docs.bsky.app/docs/api/app-bsky-labeler-get-services)
|**notification**|
notification.getUnreadCount | 🟥 Incompleto | [getUnreadCount](https://docs.bsky.app/docs/api/app-bsky-notification-get-unread-count)
notification.listNotifications | 🟥 Incompleto | [listNotifications](https://docs.bsky.app/docs/api/app-bsky-notification-list-notifications)
notification.putPreferences | 🟥 Incompleto | [putPreferences](https://docs.bsky.app/docs/api/app-bsky-notification-put-preferences)
notification.registerPush | 🟥 Incompleto | [registerPush](https://docs.bsky.app/docs/api/app-bsky-notification-register-push)
notification.updateSeen | 🟥 Incompleto | [updateSeen](https://docs.bsky.app/docs/api/app-bsky-notification-update-seen)
|**video**|
video.getJobStatus | 🟥 Incompleto | [getJobStatus](https://docs.bsky.app/docs/api/app-bsky-video-get-job-status)
video.getUploadLimits | 🟥 Incompleto | [getUploadLimits](https://docs.bsky.app/docs/api/app-bsky-video-get-upload-limits)
video.uploadVideo | 🟥 Incompleto | [uploadVideo](https://docs.bsky.app/docs/api/app-bsky-video-upload-video)

chat.bsky | Desenvolvimento | Documentação Oficial
-|-|-
|**actor**|
actor.deleteAccount | 🟥 Incompleto | [deleteAccount](https://docs.bsky.app/docs/api/chat-bsky-actor-delete-account)
actor.exportAccountData | 🟥 Incompleto | [exportAccountData](https://docs.bsky.app/docs/api/chat-bsky-actor-export-account-data)
|**convo**|
convo.deleteMessageForSelf | 🟥 Incompleto | [deleteMessageForSelf](https://docs.bsky.app/docs/api/chat-bsky-convo-delete-message-for-self)
convo.getConvoForMembers | 🟥 Incompleto | [getConvoForMembers](https://docs.bsky.app/docs/api/chat-bsky-convo-get-convo-for-members)
convo.getConvo | 🟥 Incompleto | [getConvo](https://docs.bsky.app/docs/api/chat-bsky-convo-get-convo)
convo.getLog | 🟥 Incompleto | [getLog](https://docs.bsky.app/docs/api/chat-bsky-convo-get-log)
convo.getMessages | 🟥 Incompleto | [getMessages](https://docs.bsky.app/docs/api/chat-bsky-convo-get-messages)
convo.leaveConvo | 🟥 Incompleto | [leaveConvo](https://docs.bsky.app/docs/api/chat-bsky-convo-leave-convo)
convo.listConvos | 🟥 Incompleto | [listConvos](https://docs.bsky.app/docs/api/chat-bsky-convo-list-convos)
convo.muteConvo | 🟥 Incompleto | [muteConvo](https://docs.bsky.app/docs/api/chat-bsky-convo-mute-convo)
convo.sendMessageBatch | 🟥 Incompleto | [sendMessageBatch](https://docs.bsky.app/docs/api/chat-bsky-convo-send-message-batch)
convo.sendMessage | 🟥 Incompleto | [sendMessage](https://docs.bsky.app/docs/api/chat-bsky-convo-send-message)
convo.unmuteConvo | 🟥 Incompleto | [unmuteConvo](https://docs.bsky.app/docs/api/chat-bsky-convo-unmute-convo)
convo.updateRead | 🟥 Incompleto | [updateRead](https://docs.bsky.app/docs/api/chat-bsky-convo-update-read)
|**moderation**|
moderation.getActorMetadata | 🟥 Incompleto | [getActorMetadata](https://docs.bsky.app/docs/api/chat-bsky-moderation-get-actor-metadata)
moderation.getMessageContext | 🟥 Incompleto | [getMessageContext](https://docs.bsky.app/docs/api/chat-bsky-moderation-get-message-context)
moderation.updateActorAccess | 🟥 Incompleto | [updateActorAccess](https://docs.bsky.app/docs/api/chat-bsky-moderation-update-actor-access)

com.atproto | Desenvolvimento | Documentação Oficial
-|-|-
|**admin**|
admin.deleteAccount | 🟥 Incompleto | [deleteAccount](https://docs.bsky.app/docs/api/com-atproto-admin-delete-account)
admin.disableAccountInvites | 🟥 Incompleto | [disableAccountInvites](https://docs.bsky.app/docs/api/com-atproto-admin-disable-account-invites)
admin.disableInviteCodes | 🟥 Incompleto | [disableInviteCodes](https://docs.bsky.app/docs/api/com-atproto-admin-disable-invite-codes)
admin.enableAccountInvites | 🟥 Incompleto | [enableAccountInvites](https://docs.bsky.app/docs/api/com-atproto-admin-enable-account-invites)
admin.getAccountInfo | 🟥 Incompleto | [getAccountInfo](https://docs.bsky.app/docs/api/com-atproto-admin-get-account-info)
admin.getAccountInfos | 🟥 Incompleto | [getAccountInfos](https://docs.bsky.app/docs/api/com-atproto-admin-get-account-infos)
admin.getInviteCodes | 🟥 Incompleto | [getInviteCodes](https://docs.bsky.app/docs/api/com-atproto-admin-get-invite-codes)
admin.getSubjectStatus | 🟥 Incompleto | [getSubjectStatus](https://docs.bsky.app/docs/api/com-atproto-admin-get-subject-status)
admin.searchAccounts | 🟥 Incompleto | [searchAccounts](https://docs.bsky.app/docs/api/com-atproto-admin-search-accounts)
admin.sendEmail | 🟥 Incompleto | [sendEmail](https://docs.bsky.app/docs/api/com-atproto-admin-send-email)
admin.updateAccountEmail | 🟥 Incompleto | [updateAccountEmail](https://docs.bsky.app/docs/api/com-atproto-admin-update-account-email)
admin.updateAccountHandle | 🟥 Incompleto | [updateAccountHandle](https://docs.bsky.app/docs/api/com-atproto-admin-update-account-handle)
admin.updateAccountPassword | 🟥 Incompleto | [updateAccountPassword](https://docs.bsky.app/docs/api/com-atproto-admin-update-account-password)
admin.updateSubjectStatus | 🟥 Incompleto | [updateSubjectStatus](https://docs.bsky.app/docs/api/com-atproto-admin-update-subject-status)
|**identity**|
identity.getRecommendedDidCredentials | 🟥 Incompleto | [getRecommendedDidCredentials](https://docs.bsky.app/docs/api/com-atproto-identity-get-recommended-did-credentials)
identity.requestPlcOperationSignature | 🟥 Incompleto | [requestPlcOperationSignature](https://docs.bsky.app/docs/api/com-atproto-identity-request-plc-operation-signature)
identity.resolveHandle | 🟥 Incompleto | [resolveHandle](https://docs.bsky.app/docs/api/com-atproto-identity-resolve-handle)
identity.signPlcOperation | 🟥 Incompleto | [signPlcOperation](https://docs.bsky.app/docs/api/com-atproto-identity-sign-plc-operation)
identity.submitPlcOperation | 🟥 Incompleto | [submitPlcOperation](https://docs.bsky.app/docs/api/com-atproto-identity-submit-plc-operation)
identity.updateHandle | 🟥 Incompleto | [updateHandle](https://docs.bsky.app/docs/api/com-atproto-identity-update-handle)
|**label**|
label.queryLabels | 🟥 Incompleto | [queryLabels](https://docs.bsky.app/docs/api/com-atproto-label-query-labels)
|**moderation**|
moderation.createReport | 🟥 Incompleto | [createReport](https://docs.bsky.app/docs/api/com-atproto-moderation-create-report)
|**repo**|
repo.applyWrites | 🟥 Incompleto | [applyWrites](https://docs.bsky.app/docs/api/com-atproto-repo-apply-writes)
repo.createRecord | 🟩 Concluido | [createRecord](https://docs.bsky.app/docs/api/com-atproto-repo-create-record)
repo.deleteRecord | 🟥 Incompleto | [deleteRecord](https://docs.bsky.app/docs/api/com-atproto-repo-delete-record)
repo.describeRepo | 🟥 Incompleto | [describeRepo](https://docs.bsky.app/docs/api/com-atproto-repo-describe-repo)
repo.getRecord | 🟥 Incompleto | [getRecord](https://docs.bsky.app/docs/api/com-atproto-repo-get-record)
repo.importRepo | 🟥 Incompleto | [importRepo](https://docs.bsky.app/docs/api/com-atproto-repo-import-repo)
repo.listMissingBlobs | 🟥 Incompleto | [listMissingBlobs](https://docs.bsky.app/docs/api/com-atproto-repo-list-missing-blobs)
repo.listRecords | 🟥 Incompleto | [listRecords](https://docs.bsky.app/docs/api/com-atproto-repo-list-records)
repo.putRecord | 🟥 Incompleto | [putRecord](https://docs.bsky.app/docs/api/com-atproto-repo-put-record)
repo.uploadBlob | 🟥 Incompleto | [uploadBlob](https://docs.bsky.app/docs/api/com-atproto-repo-upload-blob)
|**server**|
server.activateAccount | 🟥 Incompleto | [activateAccount](https://docs.bsky.app/docs/api/com-atproto-server-activate-account)
server.checkAccountStatus | 🟥 Incompleto | [checkAccountStatus](https://docs.bsky.app/docs/api/com-atproto-server-check-account-status)
server.confirmEmail | 🟥 Incompleto | [confirmEmail](https://docs.bsky.app/docs/api/com-atproto-server-confirm-email)
server.createAccount | 🟥 Incompleto | [createAccount](https://docs.bsky.app/docs/api/com-atproto-server-create-account)
server.createAppPassword | 🟥 Incompleto | [createAppPassword](https://docs.bsky.app/docs/api/com-atproto-server-create-app-password)
server.createInviteCode | 🟥 Incompleto | [createInviteCode](https://docs.bsky.app/docs/api/com-atproto-server-create-invite-code)
server.createInviteCodes | 🟥 Incompleto | [createInviteCodes](https://docs.bsky.app/docs/api/com-atproto-server-create-invite-codes)
server.createSession | 🟩 Concluido | [createSession](https://docs.bsky.app/docs/api/com-atproto-server-create-session)
server.deactivateAccount | 🟥 Incompleto | [deactivateAccount](https://docs.bsky.app/docs/api/com-atproto-server-deactivate-account)
server.deleteAccount | 🟥 Incompleto | [deleteAccount](https://docs.bsky.app/docs/api/com-atproto-server-delete-account)
server.deleteSession | 🟥 Incompleto | [deleteSession](https://docs.bsky.app/docs/api/com-atproto-server-delete-session)
server.describeServer | 🟥 Incompleto | [describeServer](https://docs.bsky.app/docs/api/com-atproto-server-describe-server)
server.getAccountInviteCodes | 🟥 Incompleto | [getAccountInviteCodes](https://docs.bsky.app/docs/api/com-atproto-server-get-account-invite-codes)
server.getServiceAuth | 🟥 Incompleto | [getServiceAuth](https://docs.bsky.app/docs/api/com-atproto-server-get-service-auth)
server.getSession | 🟥 Incompleto | [getSession](https://docs.bsky.app/docs/api/com-atproto-server-get-session)
server.listAppPasswords | 🟥 Incompleto | [listAppPasswords](https://docs.bsky.app/docs/api/com-atproto-server-list-app-passwords)
server.refreshSession | 🟥 Incompleto | [refreshSession](https://docs.bsky.app/docs/api/com-atproto-server-refresh-session)
server.requestAccountDelete | 🟥 Incompleto | [requestAccountDelete](https://docs.bsky.app/docs/api/com-atproto-server-request-account-delete)
server.requestEmailConfirmation | 🟥 Incompleto | [requestEmailConfirmation](https://docs.bsky.app/docs/api/com-atproto-server-request-email-confirmation)
server.requestEmailUpdate | 🟥 Incompleto | [requestEmailUpdate](https://docs.bsky.app/docs/api/com-atproto-server-request-email-update)
server.requestPasswordReset | 🟥 Incompleto | [requestPasswordReset](https://docs.bsky.app/docs/api/com-atproto-server-request-password-reset)
server.reserveSigningKey | 🟥 Incompleto | [reserveSigningKey](https://docs.bsky.app/docs/api/com-atproto-server-reserve-signing-key)
server.resetPassword | 🟥 Incompleto | [resetPassword](https://docs.bsky.app/docs/api/com-atproto-server-reset-password)
server.revokeAppPassword | 🟥 Incompleto | [revokeAppPassword](https://docs.bsky.app/docs/api/com-atproto-server-revoke-app-password)
server.updateEmail | 🟥 Incompleto | [updateEmail](https://docs.bsky.app/docs/api/com-atproto-server-update-email)
|**sync**|
sync.getBlob | 🟥 Incompleto | [getBlob](https://docs.bsky.app/docs/api/com-atproto-sync-get-blob)
sync.getBlocks | 🟥 Incompleto | [getBlocks](https://docs.bsky.app/docs/api/com-atproto-sync-get-blocks)
sync.getLatestCommit | 🟥 Incompleto | [getLatestCommit](https://docs.bsky.app/docs/api/com-atproto-sync-get-latest-commit)
sync.getRecord | 🟥 Incompleto | [getRecord](https://docs.bsky.app/docs/api/com-atproto-sync-get-record)
sync.getRepoStatus | 🟥 Incompleto | [getRepoStatus](https://docs.bsky.app/docs/api/com-atproto-sync-get-repo-status)
sync.getRepo | 🟥 Incompleto | [getRepo](https://docs.bsky.app/docs/api/com-atproto-sync-get-repo)
sync.listBlobs | 🟥 Incompleto | [listBlobs](https://docs.bsky.app/docs/api/com-atproto-sync-list-blobs)
sync.listRepos | 🟥 Incompleto | [listRepos](https://docs.bsky.app/docs/api/com-atproto-sync-list-repos)
sync.notifyOfUpdate | 🟥 Incompleto | [notifyOfUpdate](https://docs.bsky.app/docs/api/com-atproto-sync-notify-of-update)
sync.requestCrawl | 🟥 Incompleto | [requestCrawl](https://docs.bsky.app/docs/api/com-atproto-sync-request-crawl)

tools.ozone | Desenvolvimento | Documentação Oficial
-|-|-
|**communication**|
communication.createTemplate | 🟥 Incompleto | [createTemplate](https://docs.bsky.app/docs/api/tools-ozone-communication-create-template)
communication.deleteTemplate | 🟥 Incompleto | [deleteTemplate](https://docs.bsky.app/docs/api/tools-ozone-communication-delete-template)
communication.listTemplates | 🟥 Incompleto | [listTemplates](https://docs.bsky.app/docs/api/tools-ozone-communication-list-templates)
communication.updateTemplate | 🟥 Incompleto | [updateTemplate](https://docs.bsky.app/docs/api/tools-ozone-communication-update-template)
|**moderation**|
moderation.emitEvent | 🟥 Incompleto | [emitEvent](https://docs.bsky.app/docs/api/tools-ozone-moderation-emit-event)
moderation.getEvent | 🟥 Incompleto | [getEvent](https://docs.bsky.app/docs/api/tools-ozone-moderation-get-event)
moderation.getRecord | 🟥 Incompleto | [getRecord](https://docs.bsky.app/docs/api/tools-ozone-moderation-get-record)
moderation.getRepo | 🟥 Incompleto | [getRepo](https://docs.bsky.app/docs/api/tools-ozone-moderation-get-repo)
moderation.queryEvents | 🟥 Incompleto | [queryEvents](https://docs.bsky.app/docs/api/tools-ozone-moderation-query-events)
moderation.queryStatuses | 🟥 Incompleto | [queryStatuses](https://docs.bsky.app/docs/api/tools-ozone-moderation-query-statuses)
moderation.searchRepos | 🟥 Incompleto | [searchRepos](https://docs.bsky.app/docs/api/tools-ozone-moderation-search-repos)
|**server**|
server.getConfig | 🟩 Concluido | [getConfig](https://docs.bsky.app/docs/api/tools-ozone-server-get-config)
|**team**|
team.addMember | 🟥 Incompleto | [addMember](https://docs.bsky.app/docs/api/tools-ozone-team-add-member)
team.deleteMember | 🟥 Incompleto | [deleteMember](https://docs.bsky.app/docs/api/tools-ozone-team-delete-member)
team.listMembers | 🟥 Incompleto | [listMembers](https://docs.bsky.app/docs/api/tools-ozone-team-list-members)
team.updateMember | 🟥 Incompleto | [updateMember](https://docs.bsky.app/docs/api/tools-ozone-team-update-member)

**Obrigado pela sua atenção!**
