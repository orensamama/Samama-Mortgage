import { Mail, MapPin, Phone } from "lucide-react";
import { Wordmark } from "@/components/site-header";
import { WhatsAppIcon } from "@/components/whatsapp-icon";

export function SiteFooter() {
  return (
    <footer id="contact-footer" className="border-t border-border bg-secondary py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="space-y-4">
            <Wordmark size="footer" />
            <p className="text-sm leading-relaxed text-muted-foreground">
              ליווי אישי ומקצועי בכל שלבי המשכנתא — מרכישת דירה ועד מיחזור ואיחוד הלוואות, בהתאמה
              מלאה לצרכים שלכם.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-display text-sm font-bold text-primary">צרו קשר</h4>
            <div className="space-y-2.5 text-sm">
              <a
                href="https://wa.me/972542008230"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-muted-foreground transition hover:text-[#25D366]"
              >
                <WhatsAppIcon className="h-4 w-4" />
                אורן סממה: 054-200-8230
              </a>
              <a
                href="tel:0542008230"
                className="flex items-center gap-2.5 text-muted-foreground transition hover:text-primary"
              >
                <Phone className="h-4 w-4" />
                התקשרו: 054-200-8230
              </a>
              <a
                href="mailto:samama.mtg@gmail.com"
                className="flex items-center gap-2.5 text-muted-foreground transition hover:text-primary"
              >
                <Mail className="h-4 w-4" />
                מייל: samama.mtg@gmail.com
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-display text-sm font-bold text-primary">כתובת המשרד</h4>
            <div className="flex items-start gap-2.5 text-sm text-muted-foreground">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <span>היצירה 3, פתח תקווה</span>
            </div>
            <p className="pt-2 text-xs text-muted-foreground/70">
              יועץ משכנתאות פרטי ובלתי תלוי • שירות אישי. מקצועי. אמין.
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-center text-xs text-muted-foreground/60">
          <p>© {new Date().getFullYear()} אורן סממה - ייעוץ משכנתאות. כל הזכויות שמורות.</p>
        </div>
      </div>
    </footer>
  );
}
