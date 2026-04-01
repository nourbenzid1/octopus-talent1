import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getAdminToken } from "./lib/admin-token";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith("/admin") && !pathname.startsWith("/admin/login")) {
    const sessionCookie = request.cookies.get("admin-session")?.value;
    const expectedToken = await getAdminToken();

    if (sessionCookie !== expectedToken) {
      return NextResponse.redirect(new URL("/admin/login", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
