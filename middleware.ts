import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.endsWith('/')) {
    return NextResponse.redirect(new URL('/add', request.url));
  }
}

export const config = {
  matcher: ['/'],
};