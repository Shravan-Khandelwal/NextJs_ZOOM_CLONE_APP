"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Sidebar() {
  const PathName = usePathname();
  console.log(PathName.slice(1));

  interface SideBarLinks {
    Name: string;
    NavigateTo: string;
    Logo: string;
  }

  const SideBarDetails: SideBarLinks[] = [
    {
      Name: "Home",
      NavigateTo: "/",
      Logo: "🏠",
    },
    {
      Name: "Upcoming",
      NavigateTo: "/upcoming",
      Logo: "⏭️",
    },
    {
      Name: "Recordings",
      NavigateTo: "/recordings",
      Logo: "🎥",
    },
    {
      Name: "Personal Room",
      NavigateTo: "/personal-room",
      Logo: "➕",
    },
    {
      Name: "Previous",
      NavigateTo: "/previous",
      Logo: "⏮️",
    },
  ];

  return (
    <div className="flex h-screen w-fit flex-col justify-between  bg-purple-800">
      <div className="px-4 py-6">
        <ul className="mt-6 space-y-4">
          {SideBarDetails.map((link) => {
            return (
              <li key={link.Name}>
                <Link
                  href={link.NavigateTo}
                  className={`block rounded-lg ${
                    link.NavigateTo == PathName ? `bg-gray-400` : `bg-gray-100`
                  }  px-4 py-2 min-w-[14vw] text-xl font-medium text-gray-700`}
                >
                  {link.Logo} {link.Name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
