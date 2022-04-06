import { createContext, useContext, useReducer } from "react";
import { useSnackbar } from "react-simple-snackbar";
import {
  sharedInitialReducerState,
  sharedReducer,
} from "../reducer/sharedReducer";

const WatchLaterContext = createContext({
  watchLaterData: { ...sharedInitialReducerState },
  dispatch: () => {},
  addToWatchLater: () => {},
  deleteWatchLater: () => {},
  deleteFromWatchLater: () => {},
  videoInWatchLater: () => Boolean,
});

const WatchLaterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    sharedReducer,
    sharedInitialReducerState
  );

  const [showSnackbar] = useSnackbar({ position: "bottom-right" });

  const addToWatchLater = (video) => {
    const currentWatchLater = state.data.watchLater;
    const videoInCurrentWatchLater = currentWatchLater.find(
      (data) => data.id === video.id
    );
    if (videoInCurrentWatchLater) return;
    const newStateData = {
      ...state.data,
      watchLater: [...currentWatchLater, video],
    };
    localStorage.setItem("maxVideoUserData", JSON.stringify(newStateData));
    dispatch({ type: "ACTION_TYPE_SUCCESS", payload: newStateData });
    showSnackbar("Video has been added to watch later.");
  };

  const deleteWatchLater = () => {
    const newStateData = { ...state.data, watchLater: [] };
    localStorage.setItem("maxVideoUserData", JSON.stringify(newStateData));
    dispatch({ type: "ACTION_TYPE_SUCCESS", payload: newStateData });
    showSnackbar("Watch later videos has been deleted.");
  };

  const deleteFromWatchLater = (id) => {
    if (!id) return;
    const newStateData = {
      ...state.data,
      watchLater: state.data.watchLater.filter((video) => video.id !== id),
    };
    localStorage.setItem("maxVideoUserData", JSON.stringify(newStateData));
    dispatch({ type: "ACTION_TYPE_SUCCESS", payload: newStateData });
    showSnackbar("Video has been deleted from watch later.");
  };

  const videoInWatchLater = (id) => {
    if (!id) return;
    const currentWatchLater = state.data.watchLater;
    return currentWatchLater.some((data) => data.id === id);
  };

  const value = {
    watchLaterData: state.data.watchLater,
    dispatch,
    addToWatchLater,
    deleteWatchLater,
    deleteFromWatchLater,
    videoInWatchLater,
  };

  return (
    <WatchLaterContext.Provider value={value}>
      {children}
    </WatchLaterContext.Provider>
  );
};

const useWatchLater = () => useContext(WatchLaterContext);

export { WatchLaterProvider, useWatchLater };
