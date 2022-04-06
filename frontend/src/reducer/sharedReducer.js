const initialState = {
  playlists: [],
  history: [],
  watchLater: [],
  likes: [],
  dislikes: [],
};

// {
//     playlists: [{name: "", videos: []}, {...}],
//     history: [{}, {}],
//     watchLater: [{}, {}],
//     likes: [{}, {}],
//     dislikes: [{}, {}],
// }

const sharedInitialReducerState = {
  data: JSON.parse(localStorage.getItem("maxVideoUserData")) || initialState,
  error: null,
  status: "loading",
};

const sharedReducer = (state, action) => {
  switch (action.type) {
    case "ACTION_TYPE_LOADING":
      return { ...state, status: "loading" };

    case "ACTION_TYPE_SUCCESS":
      return { ...state, status: "success", data: action.payload };

    case "ACTION_TYPE_ERROR":
      return { ...state, status: "error", error: action.payload };

    default:
      return state;
  }
};

export { sharedReducer, sharedInitialReducerState };
