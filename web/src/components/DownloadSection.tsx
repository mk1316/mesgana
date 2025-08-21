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
      <CardContent className="pt-0">
        {/* Mobile-first button container */}
        <div className="download-buttons-container flex flex-col space-y-4 w-full max-w-md mx-auto sm:max-w-none sm:flex-row sm:space-y-0 sm:space-x-6 sm:justify-center">
          {/* iOS Download Button */}
          <Button
            size="lg"
            className="!w-full !min-w-0 !shrink !bg-[#ff8c42] hover:!bg-[#e67e3a] text-white text-base sm:text-lg font-bold !px-6 sm:!px-16 !py-4 sm:!py-6 !h-auto shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-200 sm:!w-auto sm:!min-w-[280px]"
            asChild
          >
            <a href="https://apps.apple.com/us/app/mesgana/id6747017556" className="flex items-center justify-center w-full">
              <Download className="mr-2 sm:mr-3 h-5 w-5 sm:h-6 sm:w-6" />
              Download for iOS
            </a>
          </Button>

          {/* Android Beta Button */}
          <Button
            size="lg"
            variant="outline"
            className="!w-full !min-w-0 !shrink !border-0 !bg-[#ff8c42] hover:!bg-[#e67e3a] text-white text-base sm:text-lg font-bold !px-6 sm:!px-16 !py-4 sm:!py-6 !h-auto shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-200 sm:!w-auto sm:!min-w-[280px]"
            asChild
          >
            <a href="https://mk1316.app.n8n.cloud/form/865f844c-fe75-452b-8bd0-4c209f5bc89c" className="flex items-center justify-center w-full">
              <Smartphone className="mr-2 sm:mr-3 h-5 w-5 sm:h-6 sm:w-6" />
              Join Android Beta
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
