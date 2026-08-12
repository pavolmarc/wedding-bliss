import { ExternalLink } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const GOOGLE_FORM_EMBED_URL = "";

export function RSVPForm() {
  return (
    <section id="rsvp" className="py-20 sm:py-28 px-6 bg-secondary/40">
      <div className="max-w-3xl mx-auto">
        <SectionHeading
          eyebrow="Vaša odpoveď"
          title="Potvrdenie účasti"
          subtitle="Prosíme, potvrďte nám svoju účasť cez pripravený formulár."
        />

        <Reveal>
          <div className="overflow-hidden rounded-2xl border border-border/60 bg-card shadow-elegant">
            {GOOGLE_FORM_EMBED_URL ? (
              <iframe
                src={GOOGLE_FORM_EMBED_URL}
                title="Potvrdenie účasti"
                className="h-[48rem] w-full bg-background"
                loading="lazy"
              >
                Načítava sa formulár...
              </iframe>
            ) : (
              <div className="flex min-h-[24rem] flex-col items-center justify-center px-6 py-12 text-center">
                <ExternalLink className="mb-5 h-8 w-8 text-burgundy" aria-hidden="true" />
                <p className="font-serif text-2xl text-foreground">Google formulár bude doplnený.</p>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
                  Sem vložíme embed odkaz z Google Forms hneď, ako bude formulár pripravený.
                </p>
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
