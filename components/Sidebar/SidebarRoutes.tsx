"use client";

import { Compass, LayoutIcon } from "lucide-react";
import SidebarItem from "./SidebarItem";

const guestRoutes = [
  {
    icon: LayoutIcon,
    label: "Dashboard",
    href: "/",
  },
  {
    icon: Compass,
    label: "Browse",
    href: "/search",
  },
];

console.log(LayoutIcon);

const SidebarRoutes = () => {
  const routes = guestRoutes;

  return (
    <div className="flex flex-col w-full">
      {routes.map((route) => (
        <SidebarItem
          key={route.href}
          icon={route.icon}
          label={route.label}
          href={route.href}
        />
      ))}
    </div>
  );
};

export default SidebarRoutes;
