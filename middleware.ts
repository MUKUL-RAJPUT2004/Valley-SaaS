import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server';

const isPublicRoute = createRouteMatcher([
    "/sign-in",
    "/sign-up",
    "/",
    // "/home"
])

const isPublicApiRoute = createRouteMatcher([
    "/api/videos"
])

export default clerkMiddleware(async (auth, req)=>{
    const { userId } = await auth();
    const currentUrl = new URL(req.url);
    const isAccessingDashboard = currentUrl.pathname === "/home";
    const isApiRequest = currentUrl.pathname.startsWith("/api");

    // if(userId && isPublicRoute(req) && !isAccessingDashboard){
    //     return NextResponse.redirect(new URL("/home", req.url))
    // }
 
    // //not logged in
    // if(!isPublicApiRoute(req) && !isPublicApiRoute(req)){
    //     return NextResponse.redirect(new URL("/sign-in", req.url))
    // }

    // if(isApiRequest && isPublicApiRoute(req)){
    //     return NextResponse.redirect(new URL("/sign-in", req.url))
    // }
    if (userId && isPublicRoute(req)) {
    return NextResponse.redirect(new URL("/home", req.url));
  }

  // Rule #2: If a user IS NOT logged in and they try to visit a PROTECTED page,
  // redirect them to the sign-in page. This is the main fix.
  if (!userId && !isPublicRoute(req)) {
    return NextResponse.redirect(new URL("/sign-in", req.url));
  }

  // If none of the above conditions are met, allow the request to continue.
  return NextResponse.next();

})

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/(api|trpc)(.*)"],
};