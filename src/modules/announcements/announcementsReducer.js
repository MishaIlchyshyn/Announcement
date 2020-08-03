import { handleActions } from "@letapp/redux-actions";
import * as actions from "./announcementsActions";

const initialState = {
  announcements: [],
};

const announcementsReducer = handleActions(
  {
    [actions.addAnnouncement]: (state, action) => ({
      announcements: state.announcements.concat(action.payload),
    }),
  },
  initialState
);

export default announcementsReducer;
