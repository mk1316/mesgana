import Image from "next/image"
import { getTranslations } from 'next-intl/server';
import LanguageToggle from './LanguageToggle';

interface HeaderProps {
  children?: React.ReactNode;
}

export default async function Header({ children }: HeaderProps) {
  const t = await getTranslations('header');

  return (
    <header className="text-center py-4">
      {children || (
        <>
          <div className="flex items-center justify-center gap-3">
            <Image
              src="/images/splash-icon-dark.png"
              alt="Mesgana App Icon"
              width={112}
              height={112}
              className="w-28 h-28 rounded-2xl shadow-lg"
            />
            <div className="text-left">
              <h1 className="text-2xl font-bold text-foreground mb-1">
                {t('appName')}
              </h1>
              <p className="text-base text-muted-foreground">
                {t('tagline')}
              </p>
            </div>
          </div>
          <LanguageToggle />
        </>
      )}
    </header>
  )
}
