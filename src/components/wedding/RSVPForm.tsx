import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const GOOGLE_FORM_EMBED_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSejb_MRZb1RmSFDlZ6W5ZVfqC6gbAytE2dPy3_U2-sWbFs5LA/viewform?embedded=true";

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
            <iframe
              src={GOOGLE_FORM_EMBED_URL}
              title="Potvrdenie účasti"
              className="h-[1180px] w-full border-0 bg-background sm:h-[1080px] md:h-[1040px]"
              loading="lazy"
            >
              Načítava sa formulár...
            </iframe>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
