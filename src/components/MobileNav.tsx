"use client";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { usePathname } from "next/navigation";
function MobileNav() {
  const PathName = usePathname();

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
    <Sheet>
      <SheetTrigger>
        {" "}
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          {SideBarDetails.map((link) => {
            return (
              <SheetTitle key={link.Name}>
                <Link
                  className={` block rounded-lg px-4 py-2 text-xl ${
                    link.NavigateTo == PathName ? `bg-gray-600` : `bg-gray-100`
                  } font-medium text-gray-700 `}
                  href={link.NavigateTo}
                >
                  {link.Name}
                </Link>
              </SheetTitle>
            );
          })}
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}

export default MobileNav;
