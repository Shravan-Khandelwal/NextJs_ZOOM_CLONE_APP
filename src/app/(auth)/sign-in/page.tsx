import React from "react";
import { SignIn } from "@clerk/nextjs";

function SignInPage() {
  return (
    <div className="flex items-center justify-center h-screen">
      <SignIn forceRedirectUrl="/upcoming"></SignIn>
    </div>
  );
}

export default SignInPage;
