import footerWordmark from "@/assets/footer-wordmark.png";

export function Footer() {
  return (
    <footer className="py-14 px-6 text-center bg-burgundy text-primary-foreground">
      <p className="sr-only">Ráchel Saraková &amp; Pavol Marcinčin</p>
      <img
        src={footerWordmark}
        alt=""
        aria-hidden="true"
        className="mx-auto mb-2 h-auto w-[min(86vw,48rem)] select-none"
        draggable={false}
      />
      <div className="divider-ornament my-4 opacity-70" />
      <p className="text-sm tracking-[0.25em] uppercase opacity-90">12 · 9 · 2026 · Prešov</p>
    </footer>
  );
}
