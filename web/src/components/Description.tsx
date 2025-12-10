import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { getTranslations } from 'next-intl/server';

export default async function Description() {
  const t = await getTranslations('description');

  return (
    <Card className="my-6">
      <CardHeader className="pb-3">
        <CardTitle className="text-xl text-mesgana-accent">
          {t('title')}
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <p className="text-foreground leading-relaxed text-base">
          {t('text')}
        </p>
      </CardContent>
    </Card>
  )
}
