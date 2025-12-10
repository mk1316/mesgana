import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { getTranslations } from 'next-intl/server';

const featureKeys = ['hymns', 'bilingual', 'sabbath', 'offline'] as const;

const featureEmojis: Record<string, string> = {
  hymns: '🎶',
  bilingual: '🌍',
  sabbath: '⛪',
  offline: '📱'
};

export default async function Features() {
  const t = await getTranslations('features');

  return (
    <section className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 my-6 sm:my-8">
        {featureKeys.map((key) => (
          <Card key={key} className="hover:shadow-lg transition-all duration-200 w-full">
            <CardHeader className="pb-3 sm:pb-4">
              <CardTitle className="flex items-center gap-2 text-base sm:text-lg text-mesgana-accent">
                {featureEmojis[key]} {t(`${key}.title`)}
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <CardDescription className="text-sm sm:text-base leading-relaxed">
                {t(`${key}.description`)}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
