import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Download, Smartphone } from "lucide-react"

export default function DownloadSection() {
  return (
    <Card className="text-center my-6">
      <CardHeader className="pb-3">
        <CardTitle className="text-xl text-mesgana-accent">
          Join the Amharic SDA Community
        </CardTitle>
        <CardDescription className="text-base">
          Download Mesgana and help us build a better worship experience.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4 pt-0">
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center w-full">
          <Button
            size="lg"
            className="bg-mesgana-accent hover:bg-mesgana-accent-hover text-white text-base sm:text-lg font-bold px-8 sm:px-16 py-4 sm:py-6 h-auto shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-200 w-full sm:w-auto min-w-0 sm:min-w-[280px]"
            asChild
          >
            <a href="https://apps.apple.com/us/app/mesgana/id6747017556">
              <Download className="mr-2 sm:mr-3 h-5 w-5 sm:h-6 sm:w-6" />
              Download for iOS
            </a>
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="border-2 border-mesgana-accent text-mesgana-accent hover:bg-mesgana-accent hover:text-white text-base sm:text-lg font-bold px-8 sm:px-16 py-4 sm:py-6 h-auto shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-200 w-full sm:w-auto min-w-0 sm:min-w-[280px]"
            asChild
          >
            <a href="https://mk1316.app.n8n.cloud/form/865f844c-fe75-452b-8bd0-4c209f5bc89c">
              <Smartphone className="mr-2 sm:mr-3 h-5 w-5 sm:h-6 sm:w-6" />
              Join Android Beta
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
