import{store}from"../../store.js";export const tokenMixin=superClass=>class extends superClass{getPartialToken(){var state=store.getState(),partialToken=state.app.user.partialToken;return partialToken}getFinalToken(){var state=store.getState(),finalToken=state.app.user.finalToken;return finalToken}};