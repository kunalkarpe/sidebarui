import React, { useState } from "react";
import { SIDEBAR_TABS } from "../sidebar.constant";
const SideTabs = ({ closeSideBar }) => {
  const [isActive, setActive] = useState<number>(SIDEBAR_TABS[0]?.id);

  return (
    <div className="flex flex-col gap-1">
      {SIDEBAR_TABS?.map((sideTab) => {
        const isActivated = sideTab?.id === isActive;
        return (
          <button
            type="button"
            className={`flex  text-xs gap-4 h-9 items-center rounded-lg px-2 ${isActivated ? "bg-primary/90 text-white border border-extraLightGray" : ""}`}
            key={sideTab?.id}
            onClick={() => setActive(sideTab?.id)}
          >
            <p>{sideTab?.icon}</p>
            {closeSideBar === false && <p>{sideTab?.name}</p>}
          </button>
        );
      })}
    </div>
  );
};

export default SideTabs;
