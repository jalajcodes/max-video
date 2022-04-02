import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";
import Sidebar from "./components/Sidebar";
import { useLocationChange } from "./hooks/useLocationChange";
import Container from "./styles/Container";
import History from "./pages/History";
import Library from "./pages/Library";
import YourVideos from "./pages/YourVideos";
import LikedVideos from "./pages/LikedVideos";
import Playlist from "./pages/Playlist";
import Trending from "./pages/Trending";

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
