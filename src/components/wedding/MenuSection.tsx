import { UtensilsCrossed, Wine } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const food = [
  { label: "Prípitok", value: "Prosecco" },
  { label: "Polievka", value: "Silný slepačí vývar, domáce rezance, julienne zelenina" },
  {
    label: "Druhé jedlo",
    value:
      "Medailónky z bravčového karé v slaninke (200 g), pyré z pečeného karfiolu, tmavé hubové ragú, pečený zemiak (200 g) s bylinkovým cottage cheese",
  },
  { label: "Večerný bufet", value: "Môžete sa tešiť na pestrý večerný bufet." },
];

const drinks = [
  { label: "Nealkoholické nápoje", value: "[doplniť]" },
  { label: "Víno", value: "[doplniť]" },
  { label: "Pivo", value: "[doplniť]" },
  { label: "Káva a čaj", value: "[doplniť]" },
  { label: "Miešané nápoje", value: "[doplniť]" },
];

function List({
  icon: Icon,
  title,
  items,
}: {
  icon: typeof UtensilsCrossed;
  title: string;
  items: { label: string; value: string }[];
}) {
  return (
    <div className="bg-card rounded-2xl p-7 sm:p-9 border border-border/60 shadow-soft">
      <div className="text-center mb-6">
        <Icon className="w-7 h-7 text-burgundy mx-auto mb-3" />
        <h3 className="font-serif text-2xl">{title}</h3>
      </div>
      <ul className="space-y-4">
        {items.map((it) => (
          <li key={it.label} className="border-b border-dotted border-border/60 pb-4 last:border-0">
            <span className="font-serif text-lg text-foreground">{it.label}</span>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground italic">{it.value}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function MenuSection() {
  return (
    <section id="menu" className="py-20 sm:py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeading eyebrow="S láskou pripravené" title="Jedálny a nápojový lístok" />
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          <Reveal>
            <List icon={UtensilsCrossed} title="Jedálny lístok" items={food} />
          </Reveal>
          <Reveal delay={100}>
            <List icon={Wine} title="Nápojový lístok" items={drinks} />
          </Reveal>
        </div>
        <p className="text-center text-sm text-muted-foreground italic mt-10 max-w-2xl mx-auto">
          Ak máte špeciálne stravovacie obmedzenia alebo alergie, uveďte ich, prosím, v
          prihlasovacom formulári.
        </p>
      </div>
    </section>
  );
}
