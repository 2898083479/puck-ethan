import type { NextRequest } from "next/server";

export type I18nMiddlewareConfig<Locales extends readonly string[]> = {
    locales: Locales;
    defaultLocale: Locales[number];
    /**
     * When a url is not prefixed with a locale, this setting determines whether the middleware should perform a *redirect* or *rewrite* to the default locale.
     *
     * **redirect**: `https://example.com/products` -> *redirect* to `https://example.com/en/products` -> client sees the locale in the url
     *
     * **rewrite**: `https://example.com/products` -> *rewrite* to `https://example.com/en/products` -> client doesn't see the locale in the url
     *
     * **rewriteDefault**: `https://example.com/products` -> use *rewrite* for the default locale, *redirect* for all other locales
     *
     * @default redirect
     */
    urlMappingStrategy?: "redirect" | "rewrite" | "rewriteDefault";

    /**
     * Override the resolution of a locale from a `Request`, which by default will try to extract it from the `Accept-Language` header. This can be useful to force the use of a specific locale regardless of the `Accept-Language` header.
     *
     * @description This function will only be called if the user doesn't already have a `Next-Locale` cookie.
     */
    resolveLocaleFromRequest?: (request: NextRequest) => Locales[number] | null;
};