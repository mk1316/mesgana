import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, Mail, Shield } from "lucide-react"
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Privacy() {
  return (
    <div className="container max-w-4xl mx-auto px-4 py-8">
      <Header>
        <Button variant="ghost" asChild className="mb-4">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Mesgana
          </Link>
        </Button>
        <h1 className="text-3xl font-bold text-foreground">Privacy Policy</h1>
        <p className="text-muted-foreground">
          <strong>Last updated:</strong> January 2026
        </p>
      </Header>
      
      <Card className="my-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-mesgana-accent" />
            Introduction
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p>
            Mesgana (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed to protecting your privacy. 
            This Privacy Policy explains how we collect, use, and protect your information 
            when you use our Ethiopian Hymnal mobile application.
          </p>
          
          <Separator />
          
          <div>
            <h3 className="text-xl font-semibold mb-3 text-foreground">
              Information Stored Locally
            </h3>
            <p className="text-muted-foreground mb-4">
              The following information is stored only on your device and never transmitted to external servers:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li><strong>App Preferences:</strong> Language settings (English/Amharic), theme preferences (light/dark/system), and font size settings</li>
              <li><strong>Favorites:</strong> List of hymns you&apos;ve marked as favorites</li>
              <li><strong>App Settings:</strong> Any other preferences you configure within the app</li>
            </ul>
          </div>

          <Separator />

          <div>
            <h3 className="text-xl font-semibold mb-3 text-foreground">
              Anonymous Analytics
            </h3>
            <p className="text-muted-foreground mb-4">
              To improve the app experience, we collect anonymous usage analytics.
              This helps us understand how the app is used and identify areas for improvement.
              We do not collect any personally identifiable information.
            </p>
          </div>

          <Separator />

          <div>
            <h3 className="text-xl font-semibold mb-3 text-foreground">
              How We Use Information
            </h3>
            <p className="text-muted-foreground mb-4">
              Since all data is stored locally on your device, we do not have access to or use any of your information. 
              Your preferences and favorites are used solely to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Display hymns in your preferred language</li>
              <li>Apply your chosen theme and font size</li>
              <li>Show your favorite hymns in the favorites section</li>
              <li>Provide a personalized user experience</li>
            </ul>
          </div>

          <Separator />

          <div>
            <h3 className="text-xl font-semibold mb-3 text-foreground">
              Data Storage and Security
            </h3>
            <div className="bg-muted/50 p-4 rounded-lg border-l-4 border-mesgana-accent">
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Your preferences and favorites are stored locally on your device</li>
                <li>Anonymous analytics are sent to secure external servers</li>
                <li>You can delete all local app data by uninstalling the app</li>
              </ul>
            </div>
          </div>

          <Separator />

          <div>
            <h3 className="text-xl font-semibold mb-3 text-foreground">
              Contact Us
            </h3>
            <div className="bg-muted/50 p-4 rounded-lg">
              <p className="text-muted-foreground mb-2">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
                              <p className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-mesgana-accent" />
                  <strong>Email:</strong>{" "}
                  <a 
                    href="mailto:support@mesgana.com" 
                    className="text-mesgana-accent hover:underline"
                  >
                    support@mesgana.com
                  </a>
                </p>
            </div>
          </div>
          
          <p className="text-sm text-muted-foreground italic">
            This Privacy Policy is effective as of the date listed above and applies to all users of the Mesgana app.
          </p>
        </CardContent>
      </Card>
      
      <Footer />
    </div>
  )
}
