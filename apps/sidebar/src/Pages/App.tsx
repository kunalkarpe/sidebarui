/** @format */

import React, { useState } from "react";
import Sidebar from "../component/Sidebar/Sidebar";
import { SidebarContext } from "../ContextProvider/SidebarContext/SidebarContextProvide";
const App = () => {
  const [closeSideBar, setCloseSidebar] = useState(false);
  return (
    <>
      <div className="flex h-screen w-full bg-offWhite">
        <aside
          className={`${closeSideBar === false ? "w-72" : "w-20"}  h-full flex border"`}
        >
          <SidebarContext.Provider value={{ closeSideBar, setCloseSidebar }}>
            <Sidebar />
          </SidebarContext.Provider>
        </aside>
        <div className="  flex-1 h-full    rounded-l-xl px-4">
          <div className="flex bg-white h-full w-full p-4">Page s</div>
        </div>
      </div>
    </>
  );
};

export default App;
