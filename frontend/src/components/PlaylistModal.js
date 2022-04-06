import React from "react";
import { useModal } from "../context/modalContext";
import { usePlaylist } from "../context/playlistContext";
import { ButtonGhost } from "../styles/Button";
import Wrapper from "../styles/PlaylistModal";
import { CloseIcon } from "./Icons";

function PlaylistModal({ video }) {
  const { playlistData } = usePlaylist();
  const {
    toggleModal,
    modalData,
    handlePlaylistFormSubmit,
    handlePlaylistsCheckboxClick,
  } = useModal();

  return (
    <Wrapper showModal={modalData.showModal}>
      <div className={`create-playlist`}>
        <form onSubmit={handlePlaylistFormSubmit}>
          <div className="modal-header">
            <h3>
              <span>Create New Playlist</span>
              <CloseIcon onClick={toggleModal} />
            </h3>
          </div>

          <input
            type="text"
            placeholder="Enter playlist name"
            id="playlistname"
            autoComplete="off"
            required
          />
          <ButtonGhost type="submit">Create</ButtonGhost>
        </form>

        {playlistData.length > 0 && (
          <div className="playlists">
            <h3>
              <span>Playlists</span>
            </h3>
            <ul>
              {playlistData.map((p) => (
                <li key={p.name}>
                  <label htmlFor={p.name}>
                    <input
                      id={p.name}
                      value={p.name}
                      type="checkbox"
                      onChange={handlePlaylistsCheckboxClick}
                      checked={modalData.selectedPlaylists.includes(p.name)}
                    />
                    {p.name}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </Wrapper>
  );
}

export default PlaylistModal;
