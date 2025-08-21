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
    <section className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 my-6 sm:my-8">
        {features.map((feature, index) => (
          <Card key={index} className="hover:shadow-lg transition-all duration-200 w-full">
            <CardHeader className="pb-3 sm:pb-4">
              <CardTitle className="flex items-center gap-2 text-base sm:text-lg text-mesgana-accent">
                {feature.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <CardDescription className="text-sm sm:text-base leading-relaxed">
                {feature.description}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
