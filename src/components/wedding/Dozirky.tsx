import { CalendarHeart, Clock, MapPin, UtensilsCrossed } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

export function Dozirky() {
  return (
    <section id="dozirky" className="py-20 sm:py-28 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          eyebrow="Stretneme sa aj po svadbe"
          title="Dožirky"
          subtitle="Budeme radi, ak sa k nám pridáte aj v nedeľu na spoločné posvadobné stretnutie."
        />
        <Reveal>
          <div className="grid gap-5 rounded-2xl border border-border/60 bg-card p-7 shadow-soft sm:grid-cols-3 sm:p-9">
            <div className="text-center">
              <CalendarHeart className="mx-auto mb-3 h-7 w-7 text-burgundy" />
              <p className="font-serif text-xl text-foreground">Nedeľa</p>
              <p className="mt-1 text-sm text-muted-foreground">po svadbe</p>
            </div>
            <div className="text-center">
              <Clock className="mx-auto mb-3 h-7 w-7 text-burgundy" />
              <p className="font-serif text-xl text-foreground">10:00</p>
              <p className="mt-1 text-sm text-muted-foreground">začíname dopoludnia</p>
            </div>
            <div className="text-center">
              <UtensilsCrossed className="mx-auto mb-3 h-7 w-7 text-burgundy" />
              <p className="font-serif text-xl text-foreground">M-street</p>
              <p className="mt-1 text-sm text-muted-foreground">po schodoch hore</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="mx-auto mt-6 max-w-2xl rounded-2xl border border-border/60 bg-background/70 p-6 text-center shadow-soft">
            <MapPin className="mx-auto mb-3 h-6 w-6 text-burgundy" />
            <p className="font-serif text-xl text-foreground">Mukačevská 29</p>
            <p className="mt-1 text-sm text-muted-foreground">Sídlisko 3, 080 01 Prešov</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
