import React, { useState } from "react";
import Sidebar from "../component/Sidebar/Sidebar";
import { SidebarContext } from "../ContextProvider/SidebarContext/SidebarContextProvide";
const App = () => {
  const [closeSideBar, setCloseSidebar] = useState(false);
  return (
    <>
      <div className="flex h-screen w-full bg-offWhite">
        <SidebarContext.Provider value={{ closeSideBar, setCloseSidebar }}>
          <aside className="w-72 h-full">
            <Sidebar />
          </aside>
        </SidebarContext.Provider>
        <div className="flex h-full w-full rounded-l-xl px-4">
          <div className="flex bg-white h-full w-full p-4">Pages</div>
        </div>
      </div>
    </>
  );
};

export default App;
