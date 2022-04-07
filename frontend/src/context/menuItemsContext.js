import { createContext, useContext } from "react";
import { DeleteIcon, LibIcon, LikeIcon, SubIcon } from "../components/Icons";
import { useHistory } from "./historyContext";
import { useLikes } from "./likesContext";
import { useModal } from "./modalContext";
import { useWatchLater } from "./watchLaterContext";

const MenuItemsContext = createContext({
  getMenuItems: () => {},
});

const MenuItemsProvider = ({ children }) => {
  const { deleteFromHistory } = useHistory();
  const { toggleModal } = useModal();
  const { removeFromLikes, addToLikes } = useLikes();
  const { addToWatchLater, deleteFromWatchLater } = useWatchLater();

  const getMenuItems = (page, isInWatchLater, isLiked) => {
    let menuItems = [
      {
        name: "Add to Playlist",
        icon: <SubIcon />,
        onClick: (_id, video) => toggleModal(video),
      },
      {
        name: isInWatchLater ? "Remove from Watch Later" : "Add to Watch Later",
        icon: <LibIcon />,
        onClick: (id, video) => {
          if (isInWatchLater) {
            deleteFromWatchLater(id);
          } else {
            addToWatchLater(video);
          }
        },
      },
      {
        name: isLiked ? "Remove from Likes" : "Add to Likes",
        icon: isLiked ? <DeleteIcon /> : <LikeIcon />,
        onClick: (_id, video) => {
          if (isLiked) {
            removeFromLikes(video, "like");
          } else {
            addToLikes(video, "like");
          }
        },
      },
    ];

    if (page === "history") {
      menuItems = [
        ...menuItems,
        {
          name: "Remove from History",
          icon: <DeleteIcon />,
          onClick: (id) => deleteFromHistory(id),
        },
      ];
    }

    return menuItems;
  };

  const value = {
    getMenuItems,
  };

  return (
    <MenuItemsContext.Provider value={value}>
      {children}
    </MenuItemsContext.Provider>
  );
};

const useMenuItems = () => useContext(MenuItemsContext);

export { MenuItemsProvider, useMenuItems };
