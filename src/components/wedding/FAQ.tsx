import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const faqs = [
  {
    q: "Presun z obradu na hostinu",
    a: "Na presun z obradu na hostinu bude zabezpečený autobus.",
  },
  {
    q: "Darčeky",
    a: "Namiesto darčekov a kvetov nás viac poteší príspevok na štart spoločného života.",
  },
  {
    q: "Gratulácie",
    a: "Prosíme aby pri kostole gratulovali iba hostia, ktorí nejdú na hostinu. Na hostine bude priestor na pokračovanie gratulácií.",
  },
  {
    q: "Voliteľný dresscode - Burgundy",
    a: "Ak sa chcete farebne zladiť, budeme radi za odtiene burgundy. Nie je to však povinný dress code.",
  },
  { q: "Potvrdenie účasti", a: "Prosíme o potvrdenie účasti do 24. 8. 2026." },
];

export function FAQ() {
  return (
    <section className="py-20 sm:py-28 px-6 bg-secondary/40">
      <div className="max-w-5xl mx-auto">
        <SectionHeading eyebrow="Dobré vedieť" title="Praktické informácie" />
        <div className="grid gap-4 sm:grid-cols-2">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={i * 60}>
              <div className="h-full rounded-2xl border border-border/60 bg-card p-6 shadow-soft">
                <p className="font-serif text-lg text-foreground">{f.q}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
