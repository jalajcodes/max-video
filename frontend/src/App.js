import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar, NotFound, Sidebar } from "./components";
import { useLocationChange } from "./hooks/useLocationChange";
import {
  History,
  Home,
  Library,
  LikedVideos,
  Playlist,
  Trending,
  Videos,
  YourVideos,
} from "./pages";
import Container from "./styles/Container";

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const handleCloseSidebar = () => setSidebarOpen(false);
  const toggleSidebarOpen = () => setSidebarOpen(!isSidebarOpen);
  useLocationChange(handleCloseSidebar);
  return (
    <>
      <Navbar toggleSidebarOpen={toggleSidebarOpen} />
      <Sidebar isSidebarOpen={isSidebarOpen} />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/watch/:videoId" element={<Home />} />
          <Route path="/channel/:channelId" element={<Home />} />
          <Route path="/results/:searchQuery" element={<Home />} />
          <Route path="/feed/videos" element={<Videos />} />
          <Route path="/feed/trending" element={<Trending />} />
          <Route path="/feed/playlist" element={<Playlist />} />
          <Route path="/feed/library" element={<Library />} />
          <Route path="/feed/history" element={<History />} />
          <Route path="/feed/my_videos" element={<YourVideos />} />
          <Route path="/feed/liked_videos" element={<LikedVideos />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
