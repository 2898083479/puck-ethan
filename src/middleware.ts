import { createI18nMiddleware } from "next-international/middleware";
import { NextRequest, NextResponse } from "next/server";
import { LANGUAGES } from "./locales";
import { noLocalePrefix } from "./middlewares";

const IGNORE_AUTH_PATHS = [
  "/",
  "/prev",
  "/signin",
  "/signup",
  "/forgot-password",
];

const I18nMiddleware = createI18nMiddleware({
  locales: ["en", "sc", "tc"],
  defaultLocale: "en",
});

// 重定向到默认语言
export function middleware(request: NextRequest) {
  return I18nMiddleware(request);
}

function isIgnoredAuthPath(pathname: string): boolean {
  return IGNORE_AUTH_PATHS.includes(pathname);
}

// 重定向
function redirectTo(url: string, request: NextRequest) {
  return NextResponse.redirect(new URL(url, request.url));
}

// 处理认证重定向
function handleAuthRedirect(
  request: NextRequest,
  token: string | undefined,
): NextResponse | undefined {
  const pathname = request.nextUrl.pathname;

  if (pathname.includes("/api")) return undefined;

  const pathnameWithoutLocale = noLocalePrefix(LANGUAGES, pathname)
    ? pathname
    : `/${pathname.split("/", 3)?.[2]}`;

  if (isIgnoredAuthPath(pathnameWithoutLocale) && token) {
    if (pathnameWithoutLocale === "/") return undefined;
    return redirectTo(pathnameWithoutLocale, request);
  }

  if (!isIgnoredAuthPath(pathnameWithoutLocale) && !token) {
    const res = redirectTo("/signin", request);
    return res;
  }

  return undefined;
}

export const config = {
  matcher: ["/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt).*)"],
};
