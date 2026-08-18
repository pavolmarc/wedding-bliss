import { Phone } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

export function Contact() {
  return (
    <section id="kontakt" className="py-20 sm:py-28 px-6 bg-secondary/40">
      <div className="max-w-3xl mx-auto">
        <SectionHeading
          eyebrow="Sme tu pre vás"
          title="Kontakt"
          subtitle="Ak by niečo nebolo jasné, v čase svadby sa obráťte na svedka. On má všetko pod palcom. Pozor, nevolajte mu s informáciami, ktoré sa dajú nájsť na tejto stránke ;) "
        />
        <Reveal>
          <div className="mx-auto max-w-md rounded-2xl border border-border/60 bg-card p-7 text-center shadow-soft">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-burgundy/10">
              <Phone className="h-5 w-5 text-burgundy" />
            </div>
            <p className="mb-2 text-xs uppercase tracking-[0.25em] text-burgundy/70">
              Ženíchov svedok
            </p>
            <p className="font-serif text-2xl text-foreground">Adam Urban</p>
            <a
              href="tel:+421948255728"
              className="mt-2 inline-block text-lg text-muted-foreground transition-colors hover:text-burgundy"
            >
              +421 948 255 728
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
