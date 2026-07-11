import { PawPrint } from "lucide-react";

export function Story() {
  return (
    <>
      <section id="story" className="bg-[#22221f] px-5 py-20 text-[#fffaf4] sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-[1400px] flex-col justify-between gap-10 lg:flex-row lg:items-end">
          <div>
            <PawPrint className="mb-6 text-[#ffd85c]" size={34} />
            <h2 className="max-w-3xl text-4xl font-black leading-tight tracking-[-.04em] sm:text-6xl">
              Life is better with
              <br />
              <span className="font-serif italic text-[#83cdbd]">a little fur</span> on it.
            </h2>
          </div>
          <div id="share" className="max-w-md">
            <p className="leading-relaxed text-white/60">
              Every pet has a personality worth celebrating. Send us your favorite photo and tell us
              what makes your companion one of a kind.
            </p>
            <button className="mt-6 rounded-full bg-[#ffd85c] px-6 py-3 font-bold text-[#22221f] transition hover:bg-[#ff6846] hover:text-white">
              Submit a portrait
            </button>
          </div>
        </div>
      </section>
      <footer className="flex flex-col gap-3 bg-[#22221f] px-5 py-8 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
        <span>© 2026 Pawfolio. Made for animal people.</span>
        <span>Adopt, don’t shop. Be kind, always.</span>
      </footer>
    </>
  );
}
