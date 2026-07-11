import { ArrowUpRight, Heart } from "lucide-react";

export function Hero() {
  return (
    <section className="mx-auto grid max-w-[1400px] items-center gap-10 px-5 pb-16 pt-10 sm:px-8 lg:grid-cols-[1.06fr_.94fr] lg:px-12 lg:pb-24 lg:pt-16">
      <div>
        <span className="mb-6 inline-flex rotate-[-2deg] items-center gap-2 rounded-full border border-[#22221f]/15 bg-[#ffd85c] px-4 py-2 text-xs font-extrabold uppercase tracking-[.16em]">
          Curated with love <Heart size={14} fill="currentColor" />
        </span>
        <h1 className="max-w-3xl text-[clamp(3.7rem,8vw,7.8rem)] font-black leading-[.82] tracking-[-.075em]">
          Pets worth
          <br />
          <span className="font-serif italic text-[#ff6846]">pausing</span> for.
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-relaxed text-[#64645d] sm:text-xl">
          A joyful little corner of the internet celebrating the furry, feathered, and wonderfully
          weird friends who make life better.
        </p>
        <a
          href="#gallery"
          className="group mt-9 inline-flex items-center gap-3 border-b-2 border-[#22221f] pb-1 font-bold"
        >
          Meet the crew{" "}
          <ArrowUpRight
            className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
            size={20}
          />
        </a>
      </div>
      <div className="relative mx-auto w-full max-w-[580px]">
        <div className="absolute -left-5 top-10 size-28 rounded-full bg-[#ffd85c] sm:-left-10 sm:size-40" />
        <div className="absolute -right-4 bottom-10 size-24 rounded-[35%] bg-[#83cdbd] sm:-right-8 sm:size-36" />
        <div className="relative rotate-[2deg] overflow-hidden rounded-[2.5rem] border-[10px] border-white bg-[#dcc9b5] shadow-[0_25px_70px_rgba(71,51,34,.18)]">
          <img
            className="aspect-[4/4.2] w-full object-cover"
            src="https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?auto=format&fit=crop&w=1200&q=90"
            alt="Happy dog outdoors"
          />
          <div className="absolute bottom-5 left-5 rounded-2xl bg-white/90 px-5 py-3 backdrop-blur">
            <p className="font-extrabold">Walter, 6</p>
            <p className="text-xs text-[#64645d]">Chief happiness officer</p>
          </div>
        </div>
        <span className="absolute -right-2 top-5 rotate-[9deg] rounded-xl bg-[#ff6846] px-4 py-2 text-sm font-bold text-white shadow-lg">
          goodest boy!
        </span>
      </div>
    </section>
  );
}
