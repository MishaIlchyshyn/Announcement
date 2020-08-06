import { createAction } from "@letapp/redux-actions";

export const addAnnouncement = createAction("announcements/ADD_ANNOUNCEMENT");
export const removeAnnouncement = createAction(
  "announcement/REMOVE_ANNOUNCEMENT"
);
export const editAnnouncement = createAction("announcement/EDIT_ANNOUNCEMENT");
export const searchAnnouncement = createAction(
  "announcement/SEARCH_ANNOUNCEMENT"
);
