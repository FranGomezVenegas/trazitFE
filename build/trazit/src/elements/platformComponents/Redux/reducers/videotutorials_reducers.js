import { ALL_ACTIVE_VIDEO_TUTORIALS } from "../actions/videotutorials_actions.js";
const INITIAL_STATE = { allActiveVideoTutorials: [] },
  videoTutorialsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case ALL_ACTIVE_VIDEO_TUTORIALS:
        console.log("videoTutorialsReducer >> ", action.type, action);
        return { ...state, allActiveVideoTutorials: action.DATA };
      default:
        return state;
    }
  };
export default videoTutorialsReducer;
