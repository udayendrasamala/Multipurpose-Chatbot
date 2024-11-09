import { clerkMiddleware,
    createRouteMatcher } from "@clerk/nextjs/server";

export default clerkMiddleware();

const isProtectedRoute = createRouteMatcher([
    '/'
    
  ]);

   clerkMiddleware((auth, req) => {
    if (isProtectedRoute(req)) auth().protect();
  });

export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};