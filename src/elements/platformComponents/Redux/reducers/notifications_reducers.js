import {
  ADD_NOTIFICATION,
  DO_LOGOUT_NOTIFICATION,
} from "../actions/notifications_actions.js";

const InitialNotificationState = {
  notifications: [],
  totalNotifications: 0,
};

const notificationsReducer = (state = InitialNotificationState, action) => {
  switch (action.type) {
    case ADD_NOTIFICATION:
      //      console.log('tab reducer', action);
      return {
        ...state,
        totalNotifications: state.totalNotifications + 1,
        notifications: [
          ...state.notifications,
          [state.totalNotifications, action.notifObj],
          //,            notifId=state.totalNotifications
        ],
      };
    case DO_LOGOUT_NOTIFICATION:
      return {
        notifications: [],
        totalNotifications: 0,
      };
    default:
      return state;
  }
};
export default notificationsReducer;
