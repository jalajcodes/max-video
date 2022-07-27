const initialModalState = {
  selectedVideo: {},
  selectedPlaylists: [],
  playlistFormError: "",
  playlistName: "",
  showPlaylistModal: false,
  showNewPlaylistForm: false,
  showAuthsModal: false,
};

const modalReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_PLAYLIST_MODAL":
      return {
        ...state,
        showPlaylistModal: !state.showPlaylistModal,
        selectedVideo: action.payload,
      };

    case "TOGGLE_PLAYLIST_FORM":
      return {
        ...state,
        showNewPlaylistForm: !state.showNewPlaylistForm,
        playlistName: "",
      };

    case "SET_PLAYLIST_NAME":
      return { ...state, playlistName: action.payload };

    case "SET_PLAY_LIST_NAME_ERROR":
      return { ...state, playlistFormError: action.payload };

    case "SET_SELECTED_PLAYLISTS":
      return { ...state, selectedPlaylists: action.payload };

    case "TOGGLE_AUTH_MODAL":
      return { ...state, showAuthModal: !state.showAuthModal };

    default:
      return state;
  }
};

export { modalReducer, initialModalState };
