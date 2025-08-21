import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Description() {
  return (
    <Card className="my-6">
      <CardHeader className="pb-3">
        <CardTitle className="text-xl text-mesgana-accent">
          Your Amharic Seventh-day Adventist Hymnal
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <p className="text-foreground leading-relaxed text-base">
          Mesgana is a digital hymnal for Amharic-speaking Seventh-day Adventist communities worldwide. 
          Whether you&apos;re leading Sabbath services or participating in worship, Mesgana brings the worship 
          experience directly to your device.
        </p>
      </CardContent>
    </Card>
  )
}
