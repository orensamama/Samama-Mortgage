import { Landmark, MessageCircle, UploadCloud } from "lucide-react";
import { WhatsAppIcon } from "@/components/whatsapp-icon";

const OREN_WHATSAPP = "https://wa.me/972542008230";

function Wordmark({ size = "header" }: { size?: "header" | "footer" }) {
  const badgeSize = size === "header" ? "h-11 w-11" : "h-9 w-9";
  const iconSize = size === "header" ? "h-5 w-5" : "h-4 w-4";
  const titleClass =
    size === "header"
      ? "font-display text-base font-bold tracking-tight text-primary"
      : "font-display text-sm font-bold tracking-tight text-primary";
  return (
    <span className="flex items-center gap-3">
      <span
        className={`flex ${badgeSize} shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-gold to-[oklch(0.7_0.1_82)] text-gold-foreground shadow-soft transition-transform duration-300`}
      >
        <Landmark className={iconSize} />
      </span>
      <span className="flex flex-col leading-tight">
        <span className={titleClass}>אורן סממה</span>
        <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
          ייעוץ משכנתאות
        </span>
      </span>
    </span>
  );
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur-xl">
      <div className="w-full flex items-center justify-between px-6 py-2 text-[12px] font-medium text-primary/70 sm:px-6 sm:text-xs opacity-70" style={{ paddingLeft: 24, paddingRight: 24 }}>
        <span className="order-1">בס\"ד</span>
        <span className="order-2">בשם ה' נעשה ונצליח</span>
      </div>
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-5 lg:px-10">
        <a href="/" className="flex items-center gap-3.5">
          <Wordmark />
        </a>
        <nav className="hidden items-center gap-10 text-sm font-medium text-foreground/75 lg:flex">
          {[
            { href: "/#upload-report", label: "בדיקת מיחזור משכנתא" },
            { href: "/#document-guides", label: "מדריך המסמכים" },
            { href: "/#contact-footer", label: "צור קשר" },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative py-1 transition-colors duration-300 hover:text-primary"
            >
              {link.label}
              <span className="absolute inset-x-0 -bottom-1 h-px scale-x-0 bg-gold transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}
        </nav>
        <a
          href={OREN_WHATSAPP}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-soft-lg"
        >
          <WhatsAppIcon className="h-4 w-4" />
          <span className="hidden sm:inline">לייעוץ ללא עלות</span>
        </a>
      </div>
    </header>
  );
}

/** Desktop-only floating shortcut straight to Oren's WhatsApp. Hidden on mobile in favor of MobileActionBar. */
function DesktopWhatsAppFab() {
  return (
    <a
      href={OREN_WHATSAPP}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-50 hidden items-center gap-2 rounded-full bg-primary px-5 py-3.5 text-sm font-semibold text-primary-foreground shadow-soft-xl ring-1 ring-gold/40 transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-soft-gold md:flex"
    >
      <MessageCircle className="h-4 w-4 text-gold" />
      וואטסאפ ישיר לאורן
    </a>
  );
}

/** Mobile-only fixed bottom action bar — scrolling is long on mobile, so keep the two key actions always reachable. */
function MobileActionBar() {
  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-50 flex gap-2.5 border-t border-white/10 bg-primary/95 px-3 pt-3 shadow-[0_-8px_30px_rgba(0,0,0,0.25)] backdrop-blur-lg md:hidden"
      style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
    >
      <a
        href="/#upload-report"
        className="flex flex-1 items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-4 py-3.5 text-sm font-semibold text-primary-foreground shadow-soft transition-all duration-300 active:scale-[0.97] active:bg-white/15"
      >
        <UploadCloud className="h-4 w-4 text-gold" />
        שליחת דוח
      </a>
      <a
        href={OREN_WHATSAPP}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-gold px-4 py-3.5 text-sm font-semibold text-gold-foreground shadow-soft transition-all duration-300 active:scale-[0.97] active:brightness-95"
      >
        <WhatsAppIcon className="h-4 w-4" />
        וואטסאפ לאורן
      </a>
    </nav>
  );
}

/** Renders the desktop FAB and the mobile bottom action bar; each hides itself on the other breakpoint. */
export function FloatingActions() {
  return (
    <>
      <DesktopWhatsAppFab />
      <MobileActionBar />
    </>
  );
}

export { Wordmark };
