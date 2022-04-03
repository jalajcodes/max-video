import {
  HistoryIcon,
  HomeIcon,
  LibIcon,
  LikeIcon,
  SubIcon,
  TrendingIcon,
  VideoIcon,
  VidIcon,
} from "../components/Icons";

export const sidebarItems = [
  {
    to: "/",
    label: "Home",
    icon: <HomeIcon />,
  },
  {
    to: "/feed/videos",
    label: "Videos",
    icon: <VideoIcon />,
  },
  {
    to: "/feed/trending",
    label: "Trending",
    icon: <TrendingIcon />,
  },
  {
    to: "/feed/playlist",
    label: "Playlist",
    icon: <SubIcon />,
    divider: true,
  },
  {
    to: "/feed/library",
    label: "Watch Later",
    icon: <LibIcon />,
  },
  {
    to: "/feed/history",
    label: "History",
    icon: <HistoryIcon />,
  },
  {
    to: "/feed/my_videos",
    label: "Your videos",
    icon: <VidIcon />,
  },
  {
    to: "/feed/liked_videos",
    label: "Liked videos",
    icon: <LikeIcon />,
  },
];
