/** @format */

import React, { useState } from "react";
import { SIDEBAR_TABS } from "../sidebar.constant";
import { filter } from "motion/react-client";
const SideTabs = ({ closeSideBar }) => {
  const [isActive, setActive] = useState<number>(SIDEBAR_TABS[0]?.id);
  const [showName, setShowName] = useState(false);
  const [sideTab, setSideTabs] = useState(SIDEBAR_TABS);
  const [sideTabId, setSideTabId] = useState(0);

  const handelDragStart = (id) => {
    setSideTabId(id);
  };

  const handeDragEnd = (index) => {
    if (index === sideTabId) return;
    const prevsTabs = [...sideTab];
    [prevsTabs[sideTabId], prevsTabs[index]] = [
      prevsTabs[index],
      prevsTabs[sideTabId],
    ];
    console.log(prevsTabs);
    setSideTabs(prevsTabs);
  };

  return (
    <div className="flex flex-col gap-1">
      {sideTab?.map((sideTab, index) => {
        const isActivated = sideTab?.id === isActive;

        return (
          <div
            className="flex"
            onDragStart={() => handelDragStart(index)}
            onDragOver={(e) => e.preventDefault()}
            onDrop={() => {
              handeDragEnd(index);
            }}
            draggable={true}
            key={sideTab?.id}
          >
            <button
              type="button"
              className={`flex w-full text-xs gap-4 h-9 items-center rounded-lg px-2 ${isActivated ? "bg-primary/90 text-white border border-extraLightGray" : ""}`}
              onClick={() => setActive(sideTab?.id)}
            >
              <p>{sideTab?.icon}</p>
              {(closeSideBar === false || isActivated) && (
                <p>{sideTab?.name}</p>
              )}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default SideTabs;
