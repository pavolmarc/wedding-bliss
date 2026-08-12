import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const faqs = [
  {
    q: "Kedy máme prísť na obrad?",
    a: "Prosíme hostí, aby prišli aspoň 15–20 minút pred začiatkom obradu.",
  },
  {
    q: "Čo ak nejdeme na hostinu?",
    a: "Po obrade bude priestor na gratulácie a spoločnú fotku aj pre hostí, ktorí nepokračujú na hostinu.",
  },
  { q: "Môžeme prísť s deťmi?", a: "Túto informáciu ešte doplníme." },
  {
    q: "Je potrebné potvrdiť účasť?",
    a: "Áno, prosíme vás o vyplnenie formulára na tejto stránke.",
  },
  {
    q: "Aká farba je vhodná na zladenie oblečenia?",
    a: "Ak sa chcete farebne zladiť, budeme radi za odtiene burgundi. Nie je to však povinný dress code.",
  },
  { q: "Do kedy treba potvrdiť účasť?", a: "Prosíme o potvrdenie účasti do 31. 8. 2026." },
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
