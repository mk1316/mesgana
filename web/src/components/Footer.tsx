import Link from "next/link"
import { getTranslations } from 'next-intl/server';

export default async function Footer() {
  const t = await getTranslations('footer');

  return (
    <footer className="text-center py-4 border-t border-border mt-6">
      <div className="flex items-center justify-center gap-6">
        <Link
          href="/privacy"
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          {t('privacyPolicy')}
        </Link>
        <span className="text-muted-foreground">•</span>
        <a
          href="mailto:support@mesgana.com"
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          {t('helpSupport')}
        </a>
        <span className="text-muted-foreground">•</span>
        <span className="text-muted-foreground text-sm">
          &copy; {t('copyright')}
        </span>
      </div>
    </footer>
  )
}
