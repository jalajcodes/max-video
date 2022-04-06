import { createContext, useContext, useReducer } from "react";
import { useSnackbar } from "react-simple-snackbar";
import PlaylistModal from "../components/PlaylistModal";
import { initialModalState, modalReducer } from "../reducer/modalReducer";
import { usePlaylist } from "./playlistContext";

const ModalContext = createContext({
  modalData: { ...initialModalState },
  dispatch: () => {},
  toggleModal: () => {},
  handlePlaylistFormSubmit: () => {},
  handlePlaylistsCheckboxClick: () => {},
});

const ModalProvider = ({ children }) => {
  const [openSnackbar] = useSnackbar();
  const { playlistData, createPlaylist, addToPlaylist, deleteFromPlaylist } =
    usePlaylist();
  const [modal, dispatch] = useReducer(modalReducer, initialModalState);
  const toggleModal = (video) => {
    dispatch({ type: "TOGGLE_MODAL", payload: video });

    const videoInPlaylists = playlistData.reduce(
      (acc, { name, videos }) =>
        videos.some(({ id }) => id === video.id) ? [...acc, name] : acc,
      []
    );

    dispatch({
      type: "SET_SELECTED_PLAYLISTS",
      payload: videoInPlaylists,
    });
  };

  const handlePlaylistFormSubmit = (event) => {
    event.preventDefault();
    const name = event.target.elements.playlistname.value;

    if (!name.trim()) {
      return openSnackbar("Please enter a playlist name");
    }

    createPlaylist(name, modal.selectedVideo);

    event.target.elements.playlistname.value = "";
    dispatch({
      type: "SET_SELECTED_PLAYLISTS",
      payload: [...modal.selectedPlaylists, name],
    });
  };

  const handlePlaylistsCheckboxClick = (event) => {
    const { checked, value: name } = event.target;

    const newSelectedPlaylists = checked
      ? [...modal.selectedPlaylists, name]
      : modal.selectedPlaylists.filter((playlistName) => playlistName !== name);

    dispatch({
      type: "SET_SELECTED_PLAYLISTS",
      payload: newSelectedPlaylists,
    });

    if (checked) {
      addToPlaylist(name, modal.selectedVideo);
    } else {
      deleteFromPlaylist(name, modal.selectedVideo);
    }
  };

  const value = {
    modalData: modal,
    dispatch,
    toggleModal,
    handlePlaylistFormSubmit,
    handlePlaylistsCheckboxClick,
  };

  return (
    <ModalContext.Provider value={value}>
      {children}
      <PlaylistModal />
    </ModalContext.Provider>
  );
};

const useModal = () => useContext(ModalContext);

export { ModalProvider, useModal };
