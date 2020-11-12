export const ALL_ACTIVE_VIDEO_TUTORIALS = "ALL_ACTIVE_VIDEO_TUTORIALS";
export function allActiveVideoTutorials(data) {
  console.log("videotutorials_actions > allActiveVideoTutorials", data);
  return { type: ALL_ACTIVE_VIDEO_TUTORIALS, DATA: data };
}
