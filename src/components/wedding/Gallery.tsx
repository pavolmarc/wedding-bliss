import photoForest from "@/assets/photos/gallery/forest.jpeg";
import photoPark from "@/assets/photos/gallery/park.jpeg";
import photoScout from "@/assets/photos/gallery/scout.jpeg";
import photoView from "@/assets/photos/gallery/view.jpeg";
import photoMountain from "@/assets/photos/gallery/mountain.jpeg";
import { SectionHeading } from "./SectionHeading";

const images = [
  {
    src: photoView,
    alt: "Ráchel a Pavol na výhľade",
    className: "aspect-[4/5]",
  },
  {
    src: photoForest,
    alt: "Ráchel a Pavol v lese",
    className: "aspect-[4/5]",
  },
  {
    src: photoPark,
    alt: "Ráchel a Pavol v parku",
    className: "aspect-[4/5]",
  },
  {
    src: photoMountain,
    alt: "Ráchel a Pavol na horách",
    className: "aspect-[4/5]",
  },
  {
    src: photoScout,
    alt: "Ráchel a Pavol na lúke",
    className: "aspect-[4/5]",
  },
];

export function Gallery() {
  return (
    <section className="py-20 sm:py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading eyebrow="Už čoskoro spolu" title="Tešíme sa na vás" />
        <div className="grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3 lg:grid-cols-5">
          {images.map((img, i) => (
            <div key={i}>
              <div className={`relative overflow-hidden rounded-2xl shadow-soft ${img.className}`}>
                <img
                  src={img.src}
                  alt={img.alt}
                  width={800}
                  height={1000}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
