import { createContext } from "react";
interface ISideBarContext {
  closeSideBar: boolean;
  setCloseSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}

export const SidebarContext = createContext<ISideBarContext>({
  closeSideBar: false,
  setCloseSidebar: () => {},
});
