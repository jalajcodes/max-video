const initialModalState = {
  selectedVideo: {},
  selectedPlaylists: [],
  playlistFormError: "",
  playlistName: "",
  showModal: false,
  showNewPlaylistForm: false,
};

const modalReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_MODAL":
      return {
        ...state,
        showModal: !state.showModal,
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

    default:
      return state;
  }
};

export { modalReducer, initialModalState };
