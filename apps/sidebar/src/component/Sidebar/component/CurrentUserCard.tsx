import { ChevronsUpDown } from "lucide-react";
import React from "react";

const CurrentUserCard = ({ cardData, closeSideBar }) => {
  return (
    <div className="flex justify-between gap-2 border border-extraLightGray rounded-lg h-12 p-2 shadow-md bg-offWhite">
      <div className="flex w-full gap-2">
        <img
          src={cardData?.image?.src}
          alt="image.jpg"
          className={`h-8 w-8 rounded-full`}
        />
        {closeSideBar === false ? (
          <div className="flex flex-col justify-center h-full">
            <p className="text-sm font-semibold ">{cardData?.name}</p>
            <p className="text-xs text-body">{cardData?.role}</p>
          </div>
        ) : (
          ""
        )}
      </div>
      {closeSideBar === false && (
        <button
          onClick={() => {}}
          className="hover:cursor-pointer"
          type="button"
        >
          <ChevronsUpDown className="size-4 text-body mt-1" />
        </button>
      )}
    </div>
  );
};

export default CurrentUserCard;
