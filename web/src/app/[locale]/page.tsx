import { setRequestLocale } from 'next-intl/server';
import Header from "@/components/Header"
import Description from "@/components/Description"
import DownloadSection from "@/components/DownloadSection"
import Features from "@/components/Features"
import Footer from "@/components/Footer"

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Home({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="container max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
      <Header />
      <Description />
      <DownloadSection />
      <Features />
      <Footer />
    </div>
  )
}
