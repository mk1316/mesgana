'use client';

import { useParams } from 'next/navigation';

export default function LanguageToggle() {
  const params = useParams();

  const locale = params.locale as string;
  const isAmharic = locale === 'am';

  const toggleLanguage = () => {
    const newLocale = isAmharic ? 'en' : 'am';
    // Use window.location for a full page reload to ensure server components re-render
    window.location.href = `/${newLocale}`;
  };

  return (
    <div className="flex items-center justify-center gap-3 mt-4">
      <span className={`text-sm font-medium ${!isAmharic ? 'text-foreground' : 'text-muted-foreground'}`}>
        English
      </span>
      <button
        onClick={toggleLanguage}
        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${
          isAmharic ? 'bg-[#ff8c42]' : 'bg-muted'
        }`}
        role="switch"
        aria-checked={isAmharic}
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-white shadow-lg transition-transform ${
            isAmharic ? 'translate-x-6' : 'translate-x-1'
          }`}
        />
      </button>
      <span className={`text-sm font-medium ${isAmharic ? 'text-foreground' : 'text-muted-foreground'}`}>
        አማርኛ
      </span>
    </div>
  );
}
