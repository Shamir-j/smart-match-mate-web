
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
  const url = request.nextUrl.clone();
  const hostname = (request.headers.get('host') || '').replace(/:\d+$/, ''); // Remove port
  const pathname = url.pathname;

  console.log('Middleware - hostname:', hostname, 'pathname:', pathname);

  // === Normalize hostname (remove port) ===
  const cleanHost = hostname.replace(/:\d+$/, ''); // e.g. app.one-night-stand.local:3000 → app.one-night-stand.local

  console.log('Normalized hostname:', cleanHost);

  // === APP SUBDOMAIN ===
  const isAppSubdomain =
    cleanHost === 'app.one-night-stand.local' ||
    cleanHost === 'app.localhost' ||
    cleanHost === 'app.one-night-stand.co';


    console.log('Is app subdomain:', isAppSubdomain);

  if (isAppSubdomain) {
    console.log('App subdomain detected:', cleanHost);

    // Redirect root or /(public) to /app
    if (pathname === '/' || pathname.startsWith('/(public)')) {
      url.pathname = '/app';
      return NextResponse.redirect(url);
    }

    // Handle /app or /app/
    if (pathname === '/app' || pathname === '/app/') {
      url.pathname = '/(authenticated)/app';
      console.log('Rewrite /app → /(authenticated)/app');
      return NextResponse.rewrite(url);
    }

    // Dynamic routes
    const dynamicRoutes = [
      { pattern: /^\/chat\/([^\/]+)$/, rewrite: '/(authenticated)/chat/$1' },
      { pattern: /^\/profile\/([^\/]+)$/, rewrite: '/(authenticated)/profile/$1' },
      { pattern: /^\/profile\/([^\/]+)\/edit$/, rewrite: '/(authenticated)/profile/$1/edit' },
      { pattern: /^\/user\/([^\/]+)$/, rewrite: '/(authenticated)/user/$1' },
    ];

    for (const { pattern, rewrite } of dynamicRoutes) {
      const match = pathname.match(pattern);
      if (match) {
        url.pathname = rewrite.replace('$1', match[1]);
        console.log(`Dynamic rewrite: ${pathname} → ${url.pathname}`);
        return NextResponse.rewrite(url);
      }
    }

    // Authenticated paths (non-dynamic)
    const authPaths = ['/matches', '/chat', '/profile', '/settings', '/user'];
    if (authPaths.some(p => pathname.startsWith(p)) && !pathname.startsWith('/(authenticated)')) {
      url.pathname = `/(authenticated)${pathname}`;
      console.log(`Auth rewrite: ${pathname} → ${url.pathname}`);
      return NextResponse.rewrite(url);
    }

    return NextResponse.next();
  }

  // === MAIN DOMAIN (one-night-stand.local, localhost, one-night-stand.co) ===
  const isMainDomain =
    cleanHost === 'one-night-stand.local' ||
    cleanHost === 'localhost' ||
    cleanHost === 'one-night-stand.co';

    console.log('Is main domain:', isMainDomain);

  if (isMainDomain) {
    console.log('Main domain:', cleanHost);

    const appPaths = ['/matches', '/chat', '/profile', '/settings', '/app', '/user'];
    if (appPaths.some(p => pathname.startsWith(p))) {
      const isAuthenticated = false; // Replace with real auth

      if (isAuthenticated) {
        const appUrl = new URL(request.url);
        appUrl.hostname = cleanHost.includes('localhost')
          ? 'app.localhost'
          : 'app.one-night-stand.local';
        return NextResponse.redirect(appUrl);
      } else {
        const loginUrl = new URL('/', request.url);
        loginUrl.searchParams.set('redirect', request.url);
        return NextResponse.redirect(loginUrl);
      }
    }

    // Public routes → (public) group

    console.log('Public route check:', pathname);
    if (pathname === '/' || pathname.startsWith('/features') || pathname.startsWith('/pricing') || pathname.startsWith('/login')) {
      if (!pathname.startsWith('/(public)')) {
        url.pathname = `/(public)${pathname}`;
        console.log(`Public rewrite: ${pathname} → ${url.pathname}`);
        return NextResponse.rewrite(url);
      }
    }

    return NextResponse.next();
  }

  // Unknown host → optional: redirect to main
  console.log('Unknown host:', cleanHost);
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};


// import { NextResponse } from 'next/server';
// import type { NextRequest } from 'next/server';

// export function middleware(request: NextRequest) {
//   const url = request.nextUrl.clone();
//   const hostname = request.headers.get('host') || '';
  
//   // Get the subdomain
//   const subdomain = hostname.split('.')[0];
  
//   console.log('Middleware - hostname:', hostname, 'subdomain:', subdomain, 'pathname:', url.pathname);
  
//   // Handle different subdomains
//   if (subdomain === 'app' || hostname.includes('app.one-night-stand.co') || hostname.includes('app.localhost') || hostname.includes('app.one-night-stand.local')) {
//     // App subdomain - handle authenticated routes with dynamic IDs
    
//     // Check if user is trying to access public routes on app subdomain
//     if (url.pathname === '/' || url.pathname.startsWith('/(public)')) {
//       // Redirect to app dashboard
//       url.pathname = '/app';
//       return NextResponse.redirect(url);
//     }
    
//     // Handle root app route specially - exact path matching
//     if (url.pathname === '/app' || url.pathname === '/app/') {
//       // Normalize pathname and rewrite to route group
//       const rewriteUrl = new URL(request.url);
//       rewriteUrl.pathname = '/(authenticated)/app';
//       console.log('Root app route rewrite:', request.nextUrl.pathname, '→', rewriteUrl.pathname);
//       return NextResponse.rewrite(rewriteUrl);
//     }
    
//     // Handle dynamic routes with IDs (chat/[conversationId], profile/[userId], etc.)
//     const dynamicRoutes = [
//       { pattern: /^\/chat\/([^\/]+)$/, rewrite: '/(authenticated)/chat/$1' },
//       { pattern: /^\/profile\/([^\/]+)$/, rewrite: '/(authenticated)/profile/$1' },
//       { pattern: /^\/profile\/([^\/]+)\/edit$/, rewrite: '/(authenticated)/profile/$1/edit' },
//       { pattern: /^\/user\/([^\/]+)$/, rewrite: '/(authenticated)/user/$1' }
//     ];
    
//     // Check for dynamic route matches
//     for (const route of dynamicRoutes) {
//       const match = url.pathname.match(route.pattern);
//       if (match) {
//         url.pathname = route.rewrite.replace('$1', match[1]);
//         console.log('Dynamic route rewrite:', request.nextUrl.pathname, '→', url.pathname);
//         return NextResponse.rewrite(url);
//       }
//     }
    
//     // Check if accessing authenticated routes without (authenticated) prefix (excluding /app which we handle above)
//     const authenticatedPaths = ['/matches', '/chat', '/profile', '/settings', '/user'];
//     if (authenticatedPaths.some(path => url.pathname.startsWith(path))) {
//       // Rewrite to authenticated route group
//       if (!url.pathname.startsWith('/(authenticated)')) {
//         url.pathname = `/(authenticated)${url.pathname}`;
//         console.log('Auth route rewrite:', request.nextUrl.pathname, '→', url.pathname);
//         return NextResponse.rewrite(url);
//       }
//     }
    
//     // TODO: Add JWT/session authentication check here for production
//     // const token = request.cookies.get('auth-token')?.value;
//     // const isAuthenticated = await validateAuthToken(token);
//     // if (!isAuthenticated && !url.pathname.startsWith('/login')) {
//     //   const loginUrl = new URL('/', request.url);
//     //   loginUrl.hostname = hostname.replace('app.', '');
//     //   loginUrl.searchParams.set('redirect', request.url);
//     //   return NextResponse.redirect(loginUrl);
//     // }
    
//     return NextResponse.next();
//   } 
  
//   // Main domain - handle public routes and redirects
//   if (hostname.includes('one-night-stand.co') || (hostname.includes('localhost') || hostname.includes('.local')) && !hostname.includes('app.')) {
    
//     // Check if user is trying to access app routes on main domain
//     const appPaths = ['/matches', '/chat', '/profile', '/settings', '/app', '/user'];
//     if (appPaths.some(path => url.pathname.startsWith(path))) {
//       // TODO: Check authentication status
//       // const token = request.cookies.get('auth-token')?.value;
//       // const isAuthenticated = await validateAuthToken(token);
//       const isAuthenticated = false; // Replace with real auth check
      
//       if (isAuthenticated) {
//         // Redirect to app subdomain with same path
//         const appUrl = new URL(url);
//         if (hostname.includes('localhost')) {
//           appUrl.hostname = `app.localhost`;
//         } else if (hostname.includes('.local')) {
//           appUrl.hostname = `app.one-night-stand.local`;
//         } else {
//           appUrl.hostname = `app.${hostname}`;
//         }
//         console.log('Redirecting to app subdomain:', appUrl.href);
//         return NextResponse.redirect(appUrl);
//       } else {
//         // Redirect to login page with redirect parameter
//         const loginUrl = new URL('/', request.url);
//         loginUrl.searchParams.set('redirect', request.url);
//         return NextResponse.redirect(loginUrl);
//       }
//     }
    
//     // Rewrite public routes to (public) group
//     console.log('Public route check:', url.pathname);
//     if (url.pathname === '/' || url.pathname.startsWith('/features') || url.pathname.startsWith('/pricing') || url.pathname.startsWith('/login')) {
//       if (!url.pathname.startsWith('/(public)')) {
//         url.pathname = `/(public)${url.pathname}`;
//         console.log('Public route rewrite:', request.nextUrl.pathname, '→', url.pathname);
//         return NextResponse.rewrite(url);
//       }
//     }
    
//     return NextResponse.next();
//   }
  
//   return NextResponse.next();
// }

// export const config = {
//   matcher: [
//     /*
//      * Match all request paths except for the ones starting with:
//      * - api (API routes)
//      * - _next/static (static files)
//      * - _next/image (image optimization files)
//      * - favicon.ico (favicon file)
//      * - public files (images, etc.)
//      */
//     '/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
//   ],
// };