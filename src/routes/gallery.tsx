import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { SiteLayout, makeHead } from "@/components/site";
import { classroomPhotos } from "@/lib/site-data";

export const Route = createFileRoute("/gallery")({
  head: () =>
    makeHead(
      "Language Training Gallery in Meerut",
      "Explore classroom training and learning moments from The Howards Council in Meerut.",
    ),
  component: GalleryPage,
});

const PHOTOS = classroomPhotos;

function GalleryPage() {
  const [i, setI] = useState<number | null>(null);
  useEffect(() => {
    const k = (e: KeyboardEvent) => {
      if (e.key === "Escape") setI(null);
      if (i !== null && e.key === "ArrowRight") setI((i + 1) % PHOTOS.length);
      if (i !== null && e.key === "ArrowLeft") setI((i + PHOTOS.length - 1) % PHOTOS.length);
    };
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  }, [i]);
  return (
    <SiteLayout>
      <section className="mx-auto max-w-7xl px-5 py-12 pb-24 lg:px-8">
        {/* First row: the three priority images */}
        <div className="grid grid-cols-1 items-start gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PHOTOS.slice(0, 3).map((p, n) => (
            <button
              key={p.src}
              onClick={() => setI(n)}
              aria-label={`Open photo: ${p.alt}`}
              className="block w-full self-start overflow-hidden rounded-2xl border border-border/70 bg-white p-1 shadow-sm transition-shadow duration-300 hover:shadow-lg"
            >
              <img
                src={p.src}
                alt={p.alt}
                loading="lazy"
                className="block w-full rounded-xl transition-transform duration-500 hover:scale-[1.02]"
              />
            </button>
          ))}
        </div>

        {/* Remaining images: masonry columns */}
        <div className="mt-5 columns-1 gap-5 sm:columns-2 lg:columns-3">
          {PHOTOS.slice(3).map((p, index) => (
            <button
              key={p.src}
              onClick={() => setI(index + 3)}
              aria-label={`Open photo: ${p.alt}`}
              className="mb-5 block w-full break-inside-avoid overflow-hidden rounded-2xl border border-border/70 bg-white p-1 shadow-sm transition-shadow duration-300 hover:shadow-lg"
            >
              <img
                src={p.src}
                alt={p.alt}
                loading="lazy"
                className="block w-full rounded-xl transition-transform duration-500 hover:scale-[1.02]"
              />
            </button>
          ))}
        </div>
      </section>

      {i !== null && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setI(null)}
          className="fixed inset-0 z-[60] grid place-items-center bg-black/90 p-4"
        >
          <img
            src={PHOTOS[i]!.src}
            alt={PHOTOS[i]!.alt}
            className="max-h-[85vh] max-w-full object-contain"
          />
          <button aria-label="Close" className="absolute right-4 top-4 text-3xl text-white">
            ×
          </button>
        </div>
      )}
    </SiteLayout>
  );
}
