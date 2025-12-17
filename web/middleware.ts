import createMiddleware from 'next-intl/middleware';
import { routing } from '@/i18n/routing';

export default createMiddleware(routing);

export const config = {
  // Match all pathnames except for:
  // - /privacy (English-only page)
  // - /api routes
  // - /_next (Next.js internals)
  // - Static files (images, favicon, etc.)
  matcher: ['/((?!privacy|api|_next|.*\\..*).*)']
};
