# Base para bot [BlueSky](https://bsky.app/profile/fabiosmuu.bsky.social).
Construir esta base em cima da [API Oficial da BlueSky](https://docs.bsky.app/docs/api/at-protocol-xrpc-api).

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

ATP | Desenvolvimento | Documentação Oficial
-|-|-
app.bsky.actor.getPreferences | 🟩 Concluido | [getPreferences](https://docs.bsky.app/docs/api/app-bsky-actor-get-preferences)
app.bsky.actor.getProfile | 🟩 Concluido | [getProfile](https://docs.bsky.app/docs/api/app-bsky-actor-get-profile)
app.bsky.actor.getProfiles | 🟩 Concluido | [getProfiles](https://docs.bsky.app/docs/api/app-bsky-actor-get-profiles)
app.bsky.actor.getSuggestions | 🟩 Concluido | [getSuggestions](https://docs.bsky.app/docs/api/app-bsky-actor-get-suggestions)
app.bsky.actor.searchActorsTypeahead | 🟨 Em Andamento | [searchActorsTypeahead](https://docs.bsky.app/docs/api/app-bsky-actor-search-actors-typeahead)
app.bsky.actor.searchActors | 🟩 Concluido | [searchActors](https://docs.bsky.app/docs/api/app-bsky-actor-search-actors)
||
app.bsky.feed.describeFeedGenerator | 🟥 Incompleto | [describeFeedGenerator](https://docs.bsky.app/docs/api/app-bsky-feed-describe-feed-generator)
app.bsky.feed.getActorFeeds | 🟥 Incompleto | [getActorFeeds](https://docs.bsky.app/docs/api/app-bsky-feed-get-actor-feeds)
app.bsky.feed.getActorLikes | 🟥 Incompleto | [getActorLikes](https://docs.bsky.app/docs/api/app-bsky-feed-get-actor-likes)
app.bsky.feed.getAuthorFeed | 🟥 Incompleto | [getAuthorFeed](https://docs.bsky.app/docs/api/app-bsky-feed-get-author-feed)
app.bsky.feed.getFeedGenerator | 🟥 Incompleto | [getFeedGenerator](https://docs.bsky.app/docs/api/app-bsky-feed-get-feed-generator)
app.bsky.feed.getFeedGenerators | 🟥 Incompleto | [getFeedGenerators](https://docs.bsky.app/docs/api/app-bsky-feed-get-feed-generators)
app.bsky.feed.getFeedSkeleton | 🟥 Incompleto | [getFeedSkeleton](https://docs.bsky.app/docs/api/app-bsky-feed-get-feed-skeleton)
app.bsky.feed.getFeed | 🟥 Incompleto | [getFeed](https://docs.bsky.app/docs/api/app-bsky-feed-get-feed)
app.bsky.feed.getLikes | 🟥 Incompleto | [getLikes](https://docs.bsky.app/docs/api/app-bsky-feed-get-likes)
app.bsky.feed.getListFeed | 🟥 Incompleto | [getListFeed](https://docs.bsky.app/docs/api/app-bsky-feed-get-list-feed)
app.bsky.feed.getPostThread | 🟥 Incompleto | [getPostThread](https://docs.bsky.app/docs/api/app-bsky-feed-get-post-thread)
app.bsky.feed.getPosts | 🟥 Incompleto | [getPosts](https://docs.bsky.app/docs/api/app-bsky-feed-get-posts)
app.bsky.feed.getQuotes | 🟥 Incompleto | [getQuotes](https://docs.bsky.app/docs/api/app-bsky-feed-get-quotes)
app.bsky.feed.getRepostedBy | 🟥 Incompleto | [getRepostedBy](https://docs.bsky.app/docs/api/app-bsky-feed-get-reposted-by)
app.bsky.feed.getSuggestedFeeds | 🟥 Incompleto | [getSuggestedFeeds](https://docs.bsky.app/docs/api/app-bsky-feed-get-suggested-feeds)
app.bsky.feed.getTimeline | 🟥 Incompleto | [getTimeline](https://docs.bsky.app/docs/api/app-bsky-feed-get-timeline)
app.bsky.feed.searchPosts | 🟥 Incompleto | [searchPosts](https://docs.bsky.app/docs/api/app-bsky-feed-search-posts)
app.bsky.feed.sendInteractions | 🟥 Incompleto | [sendInteractions](https://docs.bsky.app/docs/api/app-bsky-feed-send-interactions)
||
app.bsky.graph.getActorStarterPacks | 🟥 Incompleto | [getActorStarterPacks](https://docs.bsky.app/docs/api/app-bsky-graph-get-actor-starter-packs)
app.bsky.graph.getBlocks | 🟥 Incompleto | [getBlocks](https://docs.bsky.app/docs/api/app-bsky-graph-get-blocks)
app.bsky.graph.getFollowers | 🟥 Incompleto | [getFollowers](https://docs.bsky.app/docs/api/app-bsky-graph-get-followers)
app.bsky.graph.getFollows | 🟥 Incompleto | [getFollows](https://docs.bsky.app/docs/api/app-bsky-graph-get-follows)
app.bsky.graph.getKnownFollowers | 🟥 Incompleto | [getKnownFollowers](https://docs.bsky.app/docs/api/app-bsky-graph-get-known-followers)
app.bsky.graph.getListBlocks | 🟥 Incompleto | [getListBlocks](https://docs.bsky.app/docs/api/app-bsky-graph-get-list-blocks)
app.bsky.graph.getListMutes | 🟥 Incompleto | [getListMutes](https://docs.bsky.app/docs/api/app-bsky-graph-get-list-mutes)
app.bsky.graph.getList | 🟥 Incompleto | [getList](https://docs.bsky.app/docs/api/app-bsky-graph-get-list)
app.bsky.graph.getLists | 🟥 Incompleto | [getLists](https://docs.bsky.app/docs/api/app-bsky-graph-get-lists)
app.bsky.graph.getMutes | 🟥 Incompleto | [getMutes](https://docs.bsky.app/docs/api/app-bsky-graph-get-mutes)
app.bsky.graph.getRelationships | 🟥 Incompleto | [getRelationships](https://docs.bsky.app/docs/api/app-bsky-graph-get-relationships)
app.bsky.graph.getStarterPack | 🟥 Incompleto | [getStarterPack](https://docs.bsky.app/docs/api/app-bsky-graph-get-starter-pack)
app.bsky.graph.getStarterPacks | 🟥 Incompleto | [getStarterPacks](https://docs.bsky.app/docs/api/app-bsky-graph-get-starter-packs)
app.bsky.graph.getSuggestedFollowsByActor | 🟥 Incompleto | [getSuggestedFollowsByActor](https://docs.bsky.app/docs/api/app-bsky-graph-get-suggested-follows-by-actor)
app.bsky.graph.muteActorList | 🟥 Incompleto | [muteActorList](https://docs.bsky.app/docs/api/app-bsky-graph-mute-actor-list)
app.bsky.graph.muteActor | 🟥 Incompleto | [muteActor](https://docs.bsky.app/docs/api/app-bsky-graph-mute-actor)
app.bsky.graph.muteThread | 🟥 Incompleto | [muteThread](https://docs.bsky.app/docs/api/app-bsky-graph-mute-thread)
app.bsky.graph.unmuteActorList | 🟥 Incompleto | [unmuteActorList](https://docs.bsky.app/docs/api/app-bsky-graph-unmute-actor-list)
app.bsky.graph.unmuteActor | 🟥 Incompleto | [unmuteActor](https://docs.bsky.app/docs/api/app-bsky-graph-unmute-actor)
app.bsky.graph.unmuteThread | 🟥 Incompleto | [unmuteThread](https://docs.bsky.app/docs/api/app-bsky-graph-unmute-thread)
||
app.bsky.labeler.getServices | 🟩 Concluido | [getServices](https://docs.bsky.app/docs/api/app-bsky-labeler-get-services)
||
app.bsky.notification.getUnreadCount | 🟥 Incompleto | [getUnreadCount](https://docs.bsky.app/docs/api/app-bsky-notification-get-unread-count)
app.bsky.notification.listNotifications | 🟥 Incompleto | [listNotifications](https://docs.bsky.app/docs/api/app-bsky-notification-list-notifications)
app.bsky.notification.putPreferences | 🟥 Incompleto | [putPreferences](https://docs.bsky.app/docs/api/app-bsky-notification-put-preferences)
app.bsky.notification.registerPush | 🟥 Incompleto | [registerPush](https://docs.bsky.app/docs/api/app-bsky-notification-register-push)
app.bsky.notification.updateSeen | 🟥 Incompleto | [updateSeen](https://docs.bsky.app/docs/api/app-bsky-notification-update-seen)
||
app.bsky.video.getJobStatus | 🟥 Incompleto | [getJobStatus](https://docs.bsky.app/docs/api/app-bsky-video-get-job-status)
app.bsky.video.getUploadLimits | 🟥 Incompleto | [getUploadLimits](https://docs.bsky.app/docs/api/app-bsky-video-get-upload-limits)
app.bsky.video.uploadVideo | 🟥 Incompleto | [uploadVideo](https://docs.bsky.app/docs/api/app-bsky-video-upload-video)
||
chat.bsky.actor.deleteAccount | 🟥 Incompleto | [deleteAccount](https://docs.bsky.app/docs/api/chat-bsky-actor-delete-account)
chat.bsky.actor.exportAccountData | 🟥 Incompleto | [exportAccountData](https://docs.bsky.app/docs/api/chat-bsky-actor-export-account-data)
||
chat.bsky.convo.deleteMessageForSelf | 🟥 Incompleto | [deleteMessageForSelf](https://docs.bsky.app/docs/api/chat-bsky-convo-delete-message-for-self)
chat.bsky.convo.getConvoForMembers | 🟥 Incompleto | [getConvoForMembers](https://docs.bsky.app/docs/api/chat-bsky-convo-get-convo-for-members)
chat.bsky.convo.getConvo | 🟥 Incompleto | [getConvo](https://docs.bsky.app/docs/api/chat-bsky-convo-get-convo)
chat.bsky.convo.getLog | 🟥 Incompleto | [getLog](https://docs.bsky.app/docs/api/chat-bsky-convo-get-log)
chat.bsky.convo.getMessages | 🟥 Incompleto | [getMessages](https://docs.bsky.app/docs/api/chat-bsky-convo-get-messages)
chat.bsky.convo.leaveConvo | 🟥 Incompleto | [leaveConvo](https://docs.bsky.app/docs/api/chat-bsky-convo-leave-convo)
chat.bsky.convo.listConvos | 🟥 Incompleto | [listConvos](https://docs.bsky.app/docs/api/chat-bsky-convo-list-convos)
chat.bsky.convo.muteConvo | 🟥 Incompleto | [muteConvo](https://docs.bsky.app/docs/api/chat-bsky-convo-mute-convo)
chat.bsky.convo.sendMessageBatch | 🟥 Incompleto | [sendMessageBatch](https://docs.bsky.app/docs/api/chat-bsky-convo-send-message-batch)
chat.bsky.convo.sendMessage | 🟥 Incompleto | [sendMessage](https://docs.bsky.app/docs/api/chat-bsky-convo-send-message)
chat.bsky.convo.unmuteConvo | 🟥 Incompleto | [unmuteConvo](https://docs.bsky.app/docs/api/chat-bsky-convo-unmute-convo)
chat.bsky.convo.updateRead | 🟥 Incompleto | [updateRead](https://docs.bsky.app/docs/api/chat-bsky-convo-update-read)
||
chat.bsky.moderation.getActorMetadata | 🟥 Incompleto | [getActorMetadata](https://docs.bsky.app/docs/api/chat-bsky-moderation-get-actor-metadata)
chat.bsky.moderation.getMessageContext | 🟥 Incompleto | [getMessageContext](https://docs.bsky.app/docs/api/chat-bsky-moderation-get-message-context)
chat.bsky.moderation.updateActorAccess | 🟥 Incompleto | [updateActorAccess](https://docs.bsky.app/docs/api/chat-bsky-moderation-update-actor-access)
||
com.atproto.admin.deleteAccount | 🟥 Incompleto | [deleteAccount](https://docs.bsky.app/docs/api/com-atproto-admin-delete-account)
com.atproto.admin.disableAccountInvites | 🟥 Incompleto | [disableAccountInvites](https://docs.bsky.app/docs/api/com-atproto-admin-disable-account-invites)
com.atproto.admin.disableInviteCodes | 🟥 Incompleto | [disableInviteCodes](https://docs.bsky.app/docs/api/com-atproto-admin-disable-invite-codes)
com.atproto.admin.enableAccountInvites | 🟥 Incompleto | [enableAccountInvites](https://docs.bsky.app/docs/api/com-atproto-admin-enable-account-invites)
com.atproto.admin.getAccountInfo | 🟥 Incompleto | [getAccountInfo](https://docs.bsky.app/docs/api/com-atproto-admin-get-account-info)
com.atproto.admin.getAccountInfos | 🟥 Incompleto | [getAccountInfos](https://docs.bsky.app/docs/api/com-atproto-admin-get-account-infos)
com.atproto.admin.getInviteCodes | 🟥 Incompleto | [getInviteCodes](https://docs.bsky.app/docs/api/com-atproto-admin-get-invite-codes)
com.atproto.admin.getSubjectStatus | 🟥 Incompleto | [getSubjectStatus](https://docs.bsky.app/docs/api/com-atproto-admin-get-subject-status)
com.atproto.admin.searchAccounts | 🟥 Incompleto | [searchAccounts](https://docs.bsky.app/docs/api/com-atproto-admin-search-accounts)
com.atproto.admin.sendEmail | 🟥 Incompleto | [sendEmail](https://docs.bsky.app/docs/api/com-atproto-admin-send-email)
com.atproto.admin.updateAccountEmail | 🟥 Incompleto | [updateAccountEmail](https://docs.bsky.app/docs/api/com-atproto-admin-update-account-email)
com.atproto.admin.updateAccountHandle | 🟥 Incompleto | [updateAccountHandle](https://docs.bsky.app/docs/api/com-atproto-admin-update-account-handle)
com.atproto.admin.updateAccountPassword | 🟥 Incompleto | [updateAccountPassword](https://docs.bsky.app/docs/api/com-atproto-admin-update-account-password)
com.atproto.admin.updateSubjectStatus | 🟥 Incompleto | [updateSubjectStatus](https://docs.bsky.app/docs/api/com-atproto-admin-update-subject-status)
||
com.atproto.identity.getRecommendedDidCredentials | 🟥 Incompleto | [getRecommendedDidCredentials](https://docs.bsky.app/docs/api/com-atproto-identity-get-recommended-did-credentials)
com.atproto.identity.requestPlcOperationSignature | 🟥 Incompleto | [requestPlcOperationSignature](https://docs.bsky.app/docs/api/com-atproto-identity-request-plc-operation-signature)
com.atproto.identity.resolveHandle | 🟥 Incompleto | [resolveHandle](https://docs.bsky.app/docs/api/com-atproto-identity-resolve-handle)
com.atproto.identity.signPlcOperation | 🟥 Incompleto | [signPlcOperation](https://docs.bsky.app/docs/api/com-atproto-identity-sign-plc-operation)
com.atproto.identity.submitPlcOperation | 🟥 Incompleto | [submitPlcOperation](https://docs.bsky.app/docs/api/com-atproto-identity-submit-plc-operation)
com.atproto.identity.updateHandle | 🟥 Incompleto | [updateHandle](https://docs.bsky.app/docs/api/com-atproto-identity-update-handle)
||
com.atproto.label.queryLabels | 🟥 Incompleto | [queryLabels](https://docs.bsky.app/docs/api/com-atproto-label-query-labels)
||
com.atproto.moderation.createReport | 🟥 Incompleto | [createReport](https://docs.bsky.app/docs/api/com-atproto-moderation-create-report)
||
com.atproto.repo.applyWrites | 🟥 Incompleto | [applyWrites](https://docs.bsky.app/docs/api/com-atproto-repo-apply-writes)
com.atproto.repo.createRecord | 🟩 Concluido | [createRecord](https://docs.bsky.app/docs/api/com-atproto-repo-create-record)
com.atproto.repo.deleteRecord | 🟥 Incompleto | [deleteRecord](https://docs.bsky.app/docs/api/com-atproto-repo-delete-record)
com.atproto.repo.describeRepo | 🟥 Incompleto | [describeRepo](https://docs.bsky.app/docs/api/com-atproto-repo-describe-repo)
com.atproto.repo.getRecord | 🟥 Incompleto | [getRecord](https://docs.bsky.app/docs/api/com-atproto-repo-get-record)
com.atproto.repo.importRepo | 🟥 Incompleto | [importRepo](https://docs.bsky.app/docs/api/com-atproto-repo-import-repo)
com.atproto.repo.listMissingBlobs | 🟥 Incompleto | [listMissingBlobs](https://docs.bsky.app/docs/api/com-atproto-repo-list-missing-blobs)
com.atproto.repo.listRecords | 🟥 Incompleto | [listRecords](https://docs.bsky.app/docs/api/com-atproto-repo-list-records)
com.atproto.repo.putRecord | 🟥 Incompleto | [putRecord](https://docs.bsky.app/docs/api/com-atproto-repo-put-record)
com.atproto.repo.uploadBlob | 🟥 Incompleto | [uploadBlob](https://docs.bsky.app/docs/api/com-atproto-repo-upload-blob)
||
com.atproto.server.activateAccount | 🟥 Incompleto | [activateAccount](https://docs.bsky.app/docs/api/com-atproto-server-activate-account)
com.atproto.server.checkAccountStatus | 🟥 Incompleto | [checkAccountStatus](https://docs.bsky.app/docs/api/com-atproto-server-check-account-status)
com.atproto.server.confirmEmail | 🟥 Incompleto | [confirmEmail](https://docs.bsky.app/docs/api/com-atproto-server-confirm-email)
com.atproto.server.createAccount | 🟥 Incompleto | [createAccount](https://docs.bsky.app/docs/api/com-atproto-server-create-account)
com.atproto.server.createAppPassword | 🟥 Incompleto | [createAppPassword](https://docs.bsky.app/docs/api/com-atproto-server-create-app-password)
com.atproto.server.createInviteCode | 🟥 Incompleto | [createInviteCode](https://docs.bsky.app/docs/api/com-atproto-server-create-invite-code)
com.atproto.server.createInviteCodes | 🟥 Incompleto | [createInviteCodes](https://docs.bsky.app/docs/api/com-atproto-server-create-invite-codes)
com.atproto.server.createSession | 🟩 Concluido | [createSession](https://docs.bsky.app/docs/api/com-atproto-server-create-session)
com.atproto.server.deactivateAccount | 🟥 Incompleto | [deactivateAccount](https://docs.bsky.app/docs/api/com-atproto-server-deactivate-account)
com.atproto.server.deleteAccount | 🟥 Incompleto | [deleteAccount](https://docs.bsky.app/docs/api/com-atproto-server-delete-account)
com.atproto.server.deleteSession | 🟥 Incompleto | [deleteSession](https://docs.bsky.app/docs/api/com-atproto-server-delete-session)
com.atproto.server.describeServer | 🟥 Incompleto | [describeServer](https://docs.bsky.app/docs/api/com-atproto-server-describe-server)
com.atproto.server.getAccountInviteCodes | 🟥 Incompleto | [getAccountInviteCodes](https://docs.bsky.app/docs/api/com-atproto-server-get-account-invite-codes)
com.atproto.server.getServiceAuth | 🟥 Incompleto | [getServiceAuth](https://docs.bsky.app/docs/api/com-atproto-server-get-service-auth)
com.atproto.server.getSession | 🟥 Incompleto | [getSession](https://docs.bsky.app/docs/api/com-atproto-server-get-session)
com.atproto.server.listAppPasswords | 🟥 Incompleto | [listAppPasswords](https://docs.bsky.app/docs/api/com-atproto-server-list-app-passwords)
com.atproto.server.refreshSession | 🟥 Incompleto | [refreshSession](https://docs.bsky.app/docs/api/com-atproto-server-refresh-session)
com.atproto.server.requestAccountDelete | 🟥 Incompleto | [requestAccountDelete](https://docs.bsky.app/docs/api/com-atproto-server-request-account-delete)
com.atproto.server.requestEmailConfirmation | 🟥 Incompleto | [requestEmailConfirmation](https://docs.bsky.app/docs/api/com-atproto-server-request-email-confirmation)
com.atproto.server.requestEmailUpdate | 🟥 Incompleto | [requestEmailUpdate](https://docs.bsky.app/docs/api/com-atproto-server-request-email-update)
com.atproto.server.requestPasswordReset | 🟥 Incompleto | [requestPasswordReset](https://docs.bsky.app/docs/api/com-atproto-server-request-password-reset)
com.atproto.server.reserveSigningKey | 🟥 Incompleto | [reserveSigningKey](https://docs.bsky.app/docs/api/com-atproto-server-reserve-signing-key)
com.atproto.server.resetPassword | 🟥 Incompleto | [resetPassword](https://docs.bsky.app/docs/api/com-atproto-server-reset-password)
com.atproto.server.revokeAppPassword | 🟥 Incompleto | [revokeAppPassword](https://docs.bsky.app/docs/api/com-atproto-server-revoke-app-password)
com.atproto.server.updateEmail | 🟥 Incompleto | [updateEmail](https://docs.bsky.app/docs/api/com-atproto-server-update-email)
||
com.atproto.sync.getBlob | 🟥 Incompleto | [getBlob](https://docs.bsky.app/docs/api/com-atproto-sync-get-blob)
com.atproto.sync.getBlocks | 🟥 Incompleto | [getBlocks](https://docs.bsky.app/docs/api/com-atproto-sync-get-blocks)
com.atproto.sync.getLatestCommit | 🟥 Incompleto | [getLatestCommit](https://docs.bsky.app/docs/api/com-atproto-sync-get-latest-commit)
com.atproto.sync.getRecord | 🟥 Incompleto | [getRecord](https://docs.bsky.app/docs/api/com-atproto-sync-get-record)
com.atproto.sync.getRepoStatus | 🟥 Incompleto | [getRepoStatus](https://docs.bsky.app/docs/api/com-atproto-sync-get-repo-status)
com.atproto.sync.getRepo | 🟥 Incompleto | [getRepo](https://docs.bsky.app/docs/api/com-atproto-sync-get-repo)
com.atproto.sync.listBlobs | 🟥 Incompleto | [listBlobs](https://docs.bsky.app/docs/api/com-atproto-sync-list-blobs)
com.atproto.sync.listRepos | 🟥 Incompleto | [listRepos](https://docs.bsky.app/docs/api/com-atproto-sync-list-repos)
com.atproto.sync.notifyOfUpdate | 🟥 Incompleto | [notifyOfUpdate](https://docs.bsky.app/docs/api/com-atproto-sync-notify-of-update)
com.atproto.sync.requestCrawl | 🟥 Incompleto | [requestCrawl](https://docs.bsky.app/docs/api/com-atproto-sync-request-crawl)
||
tools.ozone.communication.createTemplate | 🟥 Incompleto | [createTemplate](https://docs.bsky.app/docs/api/tools-ozone-communication-create-template)
tools.ozone.communication.deleteTemplate | 🟥 Incompleto | [deleteTemplate](https://docs.bsky.app/docs/api/tools-ozone-communication-delete-template)
tools.ozone.communication.listTemplates | 🟥 Incompleto | [listTemplates](https://docs.bsky.app/docs/api/tools-ozone-communication-list-templates)
tools.ozone.communication.updateTemplate | 🟥 Incompleto | [updateTemplate](https://docs.bsky.app/docs/api/tools-ozone-communication-update-template)
||
tools.ozone.moderation.emitEvent | 🟥 Incompleto | [emitEvent](https://docs.bsky.app/docs/api/tools-ozone-moderation-emit-event)
tools.ozone.moderation.getEvent | 🟥 Incompleto | [getEvent](https://docs.bsky.app/docs/api/tools-ozone-moderation-get-event)
tools.ozone.moderation.getRecord | 🟥 Incompleto | [getRecord](https://docs.bsky.app/docs/api/tools-ozone-moderation-get-record)
tools.ozone.moderation.getRepo | 🟥 Incompleto | [getRepo](https://docs.bsky.app/docs/api/tools-ozone-moderation-get-repo)
tools.ozone.moderation.queryEvents | 🟥 Incompleto | [queryEvents](https://docs.bsky.app/docs/api/tools-ozone-moderation-query-events)
tools.ozone.moderation.queryStatuses | 🟥 Incompleto | [queryStatuses](https://docs.bsky.app/docs/api/tools-ozone-moderation-query-statuses)
tools.ozone.moderation.searchRepos | 🟥 Incompleto | [searchRepos](https://docs.bsky.app/docs/api/tools-ozone-moderation-search-repos)
||
tools.ozone.server.getConfig | 🟥 Incompleto | [getConfig](https://docs.bsky.app/docs/api/tools-ozone-server-get-config)
||
tools.ozone.team.addMember | 🟥 Incompleto | [addMember](https://docs.bsky.app/docs/api/tools-ozone-team-add-member)
tools.ozone.team.deleteMember | 🟥 Incompleto | [deleteMember](https://docs.bsky.app/docs/api/tools-ozone-team-delete-member)
tools.ozone.team.listMembers | 🟥 Incompleto | [listMembers](https://docs.bsky.app/docs/api/tools-ozone-team-list-members)
tools.ozone.team.updateMember | 🟥 Incompleto | [updateMember](https://docs.bsky.app/docs/api/tools-ozone-team-update-member)

**Obrigado pela sua atenção!**