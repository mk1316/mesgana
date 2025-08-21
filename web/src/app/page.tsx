import Header from "@/components/Header"
import Description from "@/components/Description"
import DownloadSection from "@/components/DownloadSection"
import Features from "@/components/Features"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <div className="container max-w-4xl mx-auto px-4 py-8">
      <Header />
      <Description />
      <DownloadSection />
      <Features />
      <Footer />
    </div>
  )
}
