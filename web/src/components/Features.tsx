import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Music, Globe, Church, Smartphone } from "lucide-react"

const features = [
  {
    icon: Music,
    title: "🎶 Amharic SDA Hymns",
    description: "Complete collection of traditional Ethiopian Seventh-day Adventist hymns in their original Amharic language."
  },
  {
    icon: Globe,
    title: "🌍 SDA Bilingual Worship",
    description: "Seamlessly switch between Amharic and English for multilingual SDA congregations, making worship accessible to all members of your church family."
  },
  {
    icon: Church,
    title: "⛪ Sabbath-Ready",
    description: "Perfect for Sabbath services, prayer meetings, and personal devotion. Build your favorites list for quick access during worship and study."
  },
  {
    icon: Smartphone,
    title: "📱 Always Available",
    description: "Complete offline access ensures your Amharic SDA hymnal is always available, whether you're in church, at home, or traveling for ministry."
  }
]

export default function Features() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-4">
      {features.map((feature, index) => (
        <Card key={index} className="hover:shadow-lg transition-all duration-200">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-base text-mesgana-accent">
              {feature.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <CardDescription className="text-sm leading-relaxed">
              {feature.description}
            </CardDescription>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
