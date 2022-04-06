import { createContext, useContext } from "react";
import { DeleteIcon, LibIcon, SubIcon } from "../components/Icons";
import { useHistory } from "./historyContext";
import { useModal } from "./modalContext";

const MenuItemsContext = createContext({
  getMenuItems: () => {},
});

const MenuItemsProvider = ({ children }) => {
  const { deleteFromHistory } = useHistory();
  const { toggleModal } = useModal();

  const getMenuItems = (page) => {
    let menuItems = [
      {
        name: "Add to Playlist",
        icon: <SubIcon />,
        onClick: (_id, video) => toggleModal(video),
      },
      {
        name: "Save to watch later",
        icon: <LibIcon />,
        onClick: () => console.log("Save to watch later"),
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
