import { VideoCard } from "../components";
import { DeleteIcon, SubIcon } from "../components/Icons";
import SignUpCard from "../components/SignupCard";
import { usePlaylist } from "../context/playlistContext";
import { ButtonGhost } from "../styles/Button";
import Wrapper from "../styles/Playlists";

const Playlist = () => {
  const { playlistData, deleteAllPlaylists, deletePlaylist } = usePlaylist();
  return playlistData.length === 0 ? (
    <SignUpCard
      icon={<SubIcon />}
      title="Roam through your Playlists"
      description="Sign in to see your playlists"
    />
  ) : (
    <Wrapper>
      <h1>
        <span>Playlists</span>{" "}
        <ButtonGhost onClick={deleteAllPlaylists}>Delete ALL</ButtonGhost>
      </h1>
      <div className="playlists-container">
        {playlistData.reverse().map((playlist) => (
          <div className="playlist" key={playlist.name}>
            <h2>
              {playlist.name}{" "}
              <DeleteIcon onClick={() => deletePlaylist(playlist.name)} />
            </h2>
            <div className="playlist-videos">
              {playlist.videos.map((video) => (
                <VideoCard key={video.id} details={video} page="playlists" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Wrapper>
  );
};

export default Playlist;
