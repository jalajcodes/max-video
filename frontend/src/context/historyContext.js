import { createContext, useContext, useReducer } from "react";
import { useSnackbar } from "react-simple-snackbar";
import {
  sharedInitialReducerState,
  sharedReducer,
} from "../reducer/sharedReducer";

const HistoryContext = createContext({
  historyData: { ...sharedInitialReducerState },
  dispatch: () => {},
  addToHistory: () => {},
  deleteHistory: () => {},
  deleteFromHistory: () => {},
});

const HistoryProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    sharedReducer,
    sharedInitialReducerState
  );

  const [showSnackbar] = useSnackbar({ position: "bottom-right" });

  const addToHistory = (video) => {
    const currentHistory = state.data.history;
    const videoInCurrentHistory = currentHistory.find(
      (data) => data.id === video.id
    );
    if (videoInCurrentHistory) return;
    const newStateData = { ...state.data, history: [...currentHistory, video] };
    localStorage.setItem("maxVideoUserData", JSON.stringify(newStateData));
    dispatch({ type: "ACTION_TYPE_SUCCESS", payload: newStateData });
  };

  const deleteHistory = () => {
    const newStateData = { ...state.data, history: [] };
    localStorage.setItem("maxVideoUserData", JSON.stringify(newStateData));
    dispatch({ type: "ACTION_TYPE_SUCCESS", payload: newStateData });
    showSnackbar("History has been deleted");
  };

  const deleteFromHistory = (id) => {
    if (!id) return;
    const newStateData = {
      ...state.data,
      history: state.data.history.filter((video) => video.id !== id),
    };
    localStorage.setItem("maxVideoUserData", JSON.stringify(newStateData));
    dispatch({ type: "ACTION_TYPE_SUCCESS", payload: newStateData });
    showSnackbar("Video has been deleted from history");
  };

  const value = {
    historyData: state.data.history,
    dispatch,
    addToHistory,
    deleteHistory,
    deleteFromHistory,
  };

  return (
    <HistoryContext.Provider value={value}>{children}</HistoryContext.Provider>
  );
};

const useHistory = () => useContext(HistoryContext);

export { HistoryProvider, useHistory };
