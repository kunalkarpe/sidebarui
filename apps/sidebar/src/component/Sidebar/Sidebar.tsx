/** @format */

import { PanelLeftClose, PanelRightClose } from "lucide-react";
import React, { useContext, useState } from "react";
import { FytuneLogo, MiniFyntuneLogo } from "../../assets/index";
import CurrentUserCard from "./component/CurrentUserCard";
import SideTabs from "./component/SideTabs";
import { CURRENT_USER_DATA } from "./sidebar.constant";
import { SidebarContext } from "../../ContextProvider/SidebarContext/SidebarContextProvide";
import { AnimatePresence } from "motion/react";
import * as motion from "motion/react-client";
const Sidebar = () => {
  const { closeSideBar, setCloseSidebar } = useContext(SidebarContext);
  return (
    <div
      className={`flex flex-col gap-6 h-full p-2 bg-white rounded-xl  ${closeSideBar === true ? "w-16" : "w-full"}`}
    >
      <div className="flex flex-col gap-4 h-[23rem] border-b border-extraLightGray p-2">
        <div
          className={` justify-between h-v12 items-center ${closeSideBar === false ? "flex" : "flex flex-col gap-2"}`}
        >
          {closeSideBar === false ? (
            <img src={FytuneLogo} alt="" className=" w-36 h-8" />
          ) : (
            <img src={MiniFyntuneLogo} alt="" className=" w-36 h-8" />
          )}

          <button
            onClick={() => {
              setCloseSidebar(!closeSideBar);
            }}
            type="button"
          >
            {closeSideBar === Boolean(true) ? (
              <PanelRightClose className="size-4 text-body" />
            ) : (
              <PanelLeftClose className="size-4 text-body" />
            )}
          </button>
        </div>

        <SideTabs closeSideBar={closeSideBar} />
      </div>

      <CurrentUserCard
        cardData={CURRENT_USER_DATA}
        closeSideBar={closeSideBar}
      />
    </div>
  );
};

export default Sidebar;
