import { handleActions } from "@letapp/redux-actions";
import * as actions from "./announcementsActions";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  allList: {
    announcements: [
      {
        title: "test",
        description: "this is my test description",
        id: uuidv4(),
        date: new Date(),
      },
      {
        title: "test 1",
        description: "this is my first test description",
        id: uuidv4(),
        date: new Date(),
      },
      {
        title: "test 2",
        description: "this is my second test description",
        id: uuidv4(),
        date: new Date(),
      },
      {
        title: "react",
        description: "this is my second react description",
        id: uuidv4(),
        date: new Date(),
      },
      {
        title: "html/css",
        description: "this is my second html/css description",
        id: uuidv4(),
        date: new Date(),
      },
    ],
  },
  found: {
    announcements: [],
  },
};

const announcementsReducer = handleActions(
  {
    [actions.addAnnouncement]: (state, action) => ({
      ...state,
      announcements: state.allList.announcements.unshift(action.payload),
    }),

    [actions.removeAnnouncement]: (state, action) => ({
      ...state,
      allList: {
        ...state.allList,
        announcements: state.allList.announcements.filter(
          (item) => item.id !== action.payload
        ),
      },
    }),

    [actions.editAnnouncement]: (state, action) => ({
      ...state,
      announcements: state.allList.announcements.splice(
        state.allList.announcements.findIndex(
          (item) => item.id === action.payload.id
        ),
        1,
        action.payload
      ),
    }),

    [actions.searchAnnouncement]: (state, action) => ({
      ...state,
      found: {
        ...state.found,
        announcements: state.allList.announcements.filter((item) =>
          item.title.toLowerCase().includes(action.payload.toLowerCase())
        ),
      },
    }),
  },
  initialState
);

export default announcementsReducer;
