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
      <section className="mx-auto max-w-7xl columns-1 gap-5 px-5 py-12 pb-24 sm:columns-2 lg:columns-3 lg:px-8">
        {PHOTOS.map((p, n) => (
          <button
            key={p.src + n}
            onClick={() => setI(n)}
            aria-label={`Open photo: ${p.alt}`}
            className="mb-4 block w-full break-inside-avoid overflow-hidden"
          >
            <img
              src={p.src}
              alt={p.alt}
              loading="lazy"
              className="w-full transition-transform duration-500 hover:scale-105"
            />
          </button>
        ))}
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
