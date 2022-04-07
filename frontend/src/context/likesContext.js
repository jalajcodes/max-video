import { createContext, useContext, useReducer } from "react";
import { useSnackbar } from "react-simple-snackbar";
import {
  sharedInitialReducerState,
  sharedReducer,
} from "../reducer/sharedReducer";

const LikesContext = createContext({
  likesData: { ...sharedInitialReducerState },
  dispatch: () => {},
  addToLikes: () => {},
  removeFromLikes: () => {},
  removeAllLikes: () => {},
  getVideoStatus: () => {},
});

const LikesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    sharedReducer,
    sharedInitialReducerState
  );

  const [showSnackbar] = useSnackbar();

  const addToLikes = (video, action) => {
    dispatch({ type: "ACTION_TYPE_LOADING" });
    const type = action === "like" ? "likes" : "dislikes";
    const currentData = state.data[type];
    const videoInCurrentData = currentData.find((data) => data.id === video.id);

    if (videoInCurrentData) {
      return showSnackbar(
        `Video already ${type === "likes" ? "liked" : "disliked"}`
      );
    }

    const newStateData = {
      ...state.data,
      [type]: [...currentData, video],
    };

    localStorage.setItem("maxVideoUserData", JSON.stringify(newStateData));
    dispatch({ type: "ACTION_TYPE_SUCCESS", payload: newStateData });

    showSnackbar(`Video added to ${type}`);
  };

  const removeFromLikes = (video, action) => {
    dispatch({ type: "ACTION_TYPE_LOADING" });
    const type = action === "like" ? "likes" : "dislikes";
    const currentData = state.data[type];
    const videoInCurrentData = currentData.find((data) => data.id === video.id);

    if (!videoInCurrentData) {
      return showSnackbar(
        `Video not found in ${type === "likes" ? "disliked" : "liked"}.`
      );
    }

    const newStateData = {
      ...state.data,
      [type]: currentData.filter((data) => data.id !== video.id),
    };

    localStorage.setItem("maxVideoUserData", JSON.stringify(newStateData));
    dispatch({ type: "ACTION_TYPE_SUCCESS", payload: newStateData });

    showSnackbar(`Video removed from ${type}.`);
  };

  const removeAllLikes = (action) => {
    dispatch({ type: "ACTION_TYPE_LOADING" });
    const type = action === "like" ? "likes" : "dislikes";
    const newStateData = {
      ...state.data,
      [type]: [],
    };

    localStorage.setItem("maxVideoUserData", JSON.stringify(newStateData));
    dispatch({ type: "ACTION_TYPE_SUCCESS", payload: newStateData });

    showSnackbar(`All liked videos removed`);
  };

  const getVideoStatus = (id) => {
    const liked = state.data.likes.some((data) => data.id === id);
    const disliked = state.data.dislikes.some((data) => data.id === id);

    return [liked, disliked];
  };

  const value = {
    likesData: state.data.likes,
    dislikesData: state.data.dislikes,
    dispatch,
    addToLikes,
    removeFromLikes,
    removeAllLikes,
    getVideoStatus,
  };

  return (
    <LikesContext.Provider value={value}>{children}</LikesContext.Provider>
  );
};

const useLikes = () => useContext(LikesContext);

export { LikesProvider, useLikes };
