define(["exports"], function (_exports) {
  "use strict";
  Object.defineProperty(_exports, "__esModule", { value: !0 });
  _exports.allActiveVideoTutorials = allActiveVideoTutorials;
  _exports.ALL_ACTIVE_VIDEO_TUTORIALS = void 0;
  const ALL_ACTIVE_VIDEO_TUTORIALS = "ALL_ACTIVE_VIDEO_TUTORIALS";
  _exports.ALL_ACTIVE_VIDEO_TUTORIALS = ALL_ACTIVE_VIDEO_TUTORIALS;
  function allActiveVideoTutorials(data) {
    console.log("videotutorials_actions > allActiveVideoTutorials", data);
    return { type: ALL_ACTIVE_VIDEO_TUTORIALS, DATA: data };
  }
});
