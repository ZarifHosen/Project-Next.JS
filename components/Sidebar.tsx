import React from "react";
import { Grid, Calendar, User, Settings } from "react-feather"; // Import icons
import Card from "./Card";
import SidebarLink from "./SidebarLink";

const links = [
  { label: "Home", icon: Grid, link: "/home" },
  {
    label: "Calendar",
    icon: Calendar,
    link: "/calendar",
  },
  { label: "Profile", icon: User, link: "/profile" },
  {
    label: "Settings",
    icon: Settings,
    link: "/settings",
  },
];

const Sidebar = () => {
  return (
    <Card className="h-full w-40 flex items-center justify-between flex-wrap">
      {links.map((link) => (
        <SidebarLink key={link.label} link={link} /> // Added key prop
      ))}
    </Card>
  );
};

export default Sidebar;
