import React from "react";
import Link from "next/link";
import MobileNav from "./MobileNav";
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
function Navbar() {
  return (
    <>
      <nav className="bg-purple-800 w-full border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap items-center justify-between w-full p-4">
          <Link href="/">
            <span className="self-center text-3xl font-semibold whitespace-nowrap dark:text-white">
              📞 Call Me!
            </span>
          </Link>

          {/* If User Is SignedOut A  SignInButton Will Be Shown  */}
          <SignedOut>
            <SignInButton />
          </SignedOut>

      {/* If User Is SignIn A  UserModel Will Be Shown  */}
          <SignedIn>
            <UserButton></UserButton>
          </SignedIn>


          <div className="md:hidden">
            <MobileNav></MobileNav>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
