import{store}from"../../store.js";export const userConfirmationMixin=superClass=>class extends superClass{getEsignPhrase(){var state=store.getState(),usSgn=state.esignDialog.sgn;return usSgn}getUserPhrase(){var state=store.getState(),usr=state.confirmUserDialog.user;return usr}getUserPwPhrase(){var state=store.getState(),usrPw=state.confirmUserDialog.userPw;return usrPw}};