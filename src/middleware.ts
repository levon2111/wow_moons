import {NextRequest, NextResponse} from 'next/server'

let defaultLocale = 'en'
let locales = ['es', 'de', 'en', 'fr', 'it']

// Get the preferred locale, similar to above or using a library
function getLocale(request: NextRequest) {
    return request.cookies.get("NEXT_LOCALE")?.value || defaultLocale
}

export function middleware(request: NextRequest) {
    // Check if there is any supported locale in the pathname
    const pathname = request.nextUrl.pathname
    const pathnameIsMissingLocale = locales.every(
        (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
    )

    // Redirect if there is no locale
    if (pathnameIsMissingLocale && pathname !== "/blog" && !pathname.startsWith("/blog") && pathname !== "/case-study" && !pathname.startsWith("/case-study")) {
        const locale = getLocale(request)

        // e.g. incoming request is /products
        // The new URL is now /en-US/products
        return NextResponse.redirect(new URL(`/${locale}/${pathname}`, request.url))
    }
}

export const config = {
    matcher: [
        // Skip all internal paths (_next, assets, api)
        '/((?!api|assets|.*\\..*|_next).*)',
        // Optional: only run on root (/) URL
        // '/'
    ],
}