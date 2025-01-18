import {
  Flag,
  HandCoins,
  House,
  LayoutGrid,
  Mail,
  PanelsLeftBottom,
  Users,
} from "lucide-react";
import React from "react";
import { luffy } from "../../assets/index";
const SIDEBAR_TABS = [
  {
    id: 1,
    name: "Dashboard",
    icon: <House className="size-4" />,
  },
  {
    id: 2,
    name: "Team",
    icon: <Users className="size-4" />,
  },
  {
    id: 3,
    name: "Organizations",
    icon: <LayoutGrid className="size-4" />,
  },

  {
    id: 4,
    name: "Rewards",
    icon: <HandCoins className="size-4" />,
  },
  {
    id: 5,
    name: "Countries",
    icon: <Flag className="size-4" />,
  },
  {
    id: 6,
    name: "Inbox",
    icon: <Mail className="size-4" />,
  },
  {
    id: 7,
    name: "Themes",
    icon: <PanelsLeftBottom className="size-4" />,
  },
];

const CURRENT_USER_DATA = {
  id: 1,
  name: " D. Luffy",
  role: "Admin",
  image: {
    src: luffy,
    alt: "luffy.jpg",
  },
};
export { CURRENT_USER_DATA, SIDEBAR_TABS };
