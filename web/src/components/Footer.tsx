import Link from "next/link"

export default function Footer() {
  return (
    <footer className="text-center py-4 border-t border-border mt-6">
      <div className="flex items-center justify-center gap-6">
        <Link 
          href="/privacy" 
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          Privacy Policy
        </Link>
        <span className="text-muted-foreground">•</span>
        <a 
          href="mailto:support@mesgana.com" 
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          Get Help & Support
        </a>
        <span className="text-muted-foreground">•</span>
        <span className="text-muted-foreground text-sm">
          &copy; 2025 Mesgana
        </span>
      </div>
    </footer>
  )
}
