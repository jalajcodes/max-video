import { createContext, useContext, useReducer } from "react";
import { useSnackbar } from "react-simple-snackbar";
import {
  sharedInitialReducerState,
  sharedReducer,
} from "../reducer/sharedReducer";

const PlaylistContext = createContext({
  playlistData: { ...sharedInitialReducerState },
  dispatch: () => {},
  createPlaylist: () => {},
  addToPlaylist: () => {},
  deleteAllPlaylists: () => {},
  deletePlaylist: () => {},
  deleteFromPlaylist: () => {},
});

const PlaylistProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    sharedReducer,
    sharedInitialReducerState
  );

  const [showSnackbar] = useSnackbar();

  const createPlaylist = (name, video) => {
    dispatch({ type: "ACTION_TYPE_LOADING" });

    const currentPlaylists = state.data.playlists;
    const playlistInCurrentPlaylists = currentPlaylists.find(
      (data) => data.name.toLowerCase() === name.toLowerCase()
    );

    if (playlistInCurrentPlaylists) {
      return showSnackbar("Playlist with this name already exists");
    }

    const newStateData = {
      ...state.data,
      playlists: [...currentPlaylists, { name, videos: [video] }],
    };

    localStorage.setItem("maxVideoUserData", JSON.stringify(newStateData));
    dispatch({ type: "ACTION_TYPE_SUCCESS", payload: newStateData });

    showSnackbar("Video added to the new playlist");
  };

  const addToPlaylist = (name, video) => {
    dispatch({ type: "ACTION_TYPE_LOADING" });

    const currentPlaylists = state.data.playlists;
    const playlistInCurrentPlaylists = currentPlaylists.find(
      (data) => data.name.toLowerCase() === name.toLowerCase()
    );

    if (!playlistInCurrentPlaylists) {
      return showSnackbar("Playlist with this name doesn't exist");
    }

    const newStateData = {
      ...state.data,
      playlists: currentPlaylists.map((playlist) =>
        playlist.name.toLowerCase() === name.toLowerCase()
          ? { ...playlist, videos: [...playlist.videos, video] }
          : playlist
      ),
    };

    localStorage.setItem("maxVideoUserData", JSON.stringify(newStateData));
    dispatch({ type: "ACTION_TYPE_SUCCESS", payload: newStateData });

    showSnackbar("Video added to the playlist");
  };

  const deleteFromPlaylist = (name, video) => {
    dispatch({ type: "ACTION_TYPE_LOADING" });

    const currentPlaylists = state.data.playlists;
    const playlistInCurrentPlaylists = currentPlaylists.find(
      (data) => data.name.toLowerCase() === name.toLowerCase()
    );

    if (!playlistInCurrentPlaylists) {
      return showSnackbar("Playlist with this name doesn't exist");
    }

    const newStateData = {
      ...state.data,
      playlists: currentPlaylists.map((playlist) =>
        playlist.name.toLowerCase() === name.toLowerCase()
          ? {
              ...playlist,
              videos: playlist.videos.filter(
                (videoInPlaylist) => videoInPlaylist.id !== video.id
              ),
            }
          : playlist
      ),
    };

    localStorage.setItem("maxVideoUserData", JSON.stringify(newStateData));
    dispatch({ type: "ACTION_TYPE_SUCCESS", payload: newStateData });

    showSnackbar("Video removed from the playlist");
  };

  const deletePlaylist = (name) => {
    dispatch({ type: "ACTION_TYPE_LOADING" });

    const currentPlaylists = state.data.playlists;
    const playlistInCurrentPlaylists = currentPlaylists.find(
      (data) => data.name.toLowerCase() === name.toLowerCase()
    );

    if (!playlistInCurrentPlaylists) {
      return showSnackbar("Playlist with this name doesn't exist");
    }

    const newStateData = {
      ...state.data,
      playlists: currentPlaylists.filter(
        (playlist) => playlist.name.toLowerCase() !== name.toLowerCase()
      ),
    };

    localStorage.setItem("maxVideoUserData", JSON.stringify(newStateData));
    dispatch({ type: "ACTION_TYPE_SUCCESS", payload: newStateData });

    showSnackbar("Playlist deleted");
  };

  const deleteAllPlaylists = () => {
    const newStateData = {
      ...state.data,
      playlists: [],
    };
    localStorage.setItem("maxVideoUserData", JSON.stringify(newStateData));
    dispatch({
      type: "ACTION_TYPE_SUCCESS",
      payload: newStateData,
    });

    showSnackbar("All playlists deleted");
  };

  const value = {
    playlistData: state.data.playlists,
    dispatch,
    createPlaylist,
    addToPlaylist,
    deleteFromPlaylist,
    deletePlaylist,
    deleteAllPlaylists,
  };

  return (
    <PlaylistContext.Provider value={value}>
      {children}
    </PlaylistContext.Provider>
  );
};

const usePlaylist = () => useContext(PlaylistContext);

export { PlaylistProvider, usePlaylist };
