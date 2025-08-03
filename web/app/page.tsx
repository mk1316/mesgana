import { AuthButton } from "@/components/auth-button";
import { ThemeSwitcher } from "@/components/theme-switcher";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center">
      <div className="flex-1 w-full flex flex-col gap-20 items-center">
        <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
          <div className="w-full max-w-5xl flex justify-between items-center p-3 px-5 text-sm">
            <div className="flex gap-5 items-center font-semibold">
              <Link href={"/"}>Mesgana</Link>
            </div>
            <div className="flex items-center gap-4">
              <AuthButton />
              <ThemeSwitcher />
            </div>
          </div>
        </nav>
        
        <div className="flex-1 flex flex-col gap-20 max-w-5xl p-5">
          <div className="flex-1 flex flex-col gap-6 px-4 text-center">
            <h1 className="text-4xl font-bold mb-6">
              Welcome to Mesgana
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Amharic SDA Hymnal
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/hymns" 
                className="px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
              >
                Browse Hymns
              </Link>
              <Link 
                href="/playlists" 
                className="px-6 py-3 border border-input bg-background hover:bg-accent hover:text-accent-foreground rounded-md transition-colors"
              >
                View Playlists
              </Link>
            </div>
          </div>
        </div>

        <footer className="w-full flex items-center justify-center border-t mx-auto text-center text-xs gap-8 py-16">
          <p>
            Mesgana SDA Hymnal
          </p>
          <Link 
            href="/privacy" 
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Privacy Policy
          </Link>
        </footer>
      </div>
    </main>
  );
}
