import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// Create a route matcher for public routes
const publicRoutes = createRouteMatcher([
  "/", // Home route
  "/sign-in", // Sign-in page
  "/sign-up", // Sign-up page
]);

export default clerkMiddleware((auth, req) => {
  if (!publicRoutes(req)) auth().protect();
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
