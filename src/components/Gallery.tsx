import { ArrowUpRight, Heart, PawPrint, Search } from "lucide-react";
import { filters } from "../data/pets";
import type { Pet, PetFilter } from "../types/pet";

type GalleryProps = {
  favorites: ReadonlySet<number>;
  filter: PetFilter;
  pets: Pet[];
  query: string;
  onFilterChange: (filter: PetFilter) => void;
  onQueryChange: (query: string) => void;
  onToggleFavorite: (id: Pet["id"]) => void;
};

export function Gallery({
  favorites,
  filter,
  pets,
  query,
  onFilterChange,
  onQueryChange,
  onToggleFavorite,
}: GalleryProps) {
  return (
    <section
      id="gallery"
      className="rounded-t-[3rem] bg-[#f3ecdf] px-5 py-16 sm:px-8 lg:px-12 lg:py-24"
    >
      <div className="mx-auto max-w-[1400px]">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <p className="mb-3 text-xs font-extrabold uppercase tracking-[.2em] text-[#ff6846]">
              The gallery
            </p>
            <h2 className="text-4xl font-black tracking-[-.05em] sm:text-6xl">
              Say hello to everyone.
            </h2>
          </div>
          <label className="flex w-full max-w-sm items-center gap-3 rounded-full border border-[#22221f]/15 bg-white px-5 py-3.5">
            <Search size={18} />
            <input
              value={query}
              onChange={(event) => onQueryChange(event.target.value)}
              className="min-w-0 flex-1 bg-transparent text-sm outline-none"
              placeholder="Search by name or breed..."
            />
          </label>
        </div>
        <div className="mt-10 flex flex-wrap gap-2">
          {filters.map((item) => (
            <button
              key={item}
              onClick={() => onFilterChange(item)}
              className={`rounded-full px-5 py-2.5 text-sm font-bold transition ${filter === item ? "bg-[#22221f] text-white" : "border border-[#22221f]/15 bg-transparent hover:bg-white"}`}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="mt-10 grid gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {pets.map((pet, index) => (
            <PetCard
              key={pet.id}
              favorite={favorites.has(pet.id)}
              offset={index % 3 === 1}
              pet={pet}
              onToggleFavorite={onToggleFavorite}
            />
          ))}
        </div>
        {pets.length === 0 && <EmptyGallery />}
      </div>
    </section>
  );
}

type PetCardProps = {
  favorite: boolean;
  offset: boolean;
  pet: Pet;
  onToggleFavorite: (id: Pet["id"]) => void;
};

function PetCard({ favorite, offset, pet, onToggleFavorite }: PetCardProps) {
  return (
    <article className={`group ${offset ? "lg:translate-y-8" : ""}`}>
      <div className={`relative overflow-hidden rounded-[1.7rem] ${pet.tone}`}>
        <img
          src={pet.image}
          alt={`${pet.name}, ${pet.breed}`}
          className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <button
          onClick={() => onToggleFavorite(pet.id)}
          aria-label={`Favorite ${pet.name}`}
          className="absolute right-4 top-4 grid size-10 place-items-center rounded-full bg-white/90 transition hover:scale-110"
        >
          <Heart size={18} className={favorite ? "fill-[#ff6846] text-[#ff6846]" : ""} />
        </button>
      </div>
      <div className="flex items-start justify-between px-1 pt-4">
        <div>
          <h3 className="text-xl font-extrabold tracking-tight">{pet.name}</h3>
          <p className="mt-1 text-sm text-[#6d6b64]">
            {pet.breed} · {pet.age}
          </p>
        </div>
        <ArrowUpRight className="mt-1 opacity-0 transition group-hover:opacity-100" size={20} />
      </div>
    </article>
  );
}

function EmptyGallery() {
  return (
    <div className="py-24 text-center">
      <PawPrint className="mx-auto mb-4 text-[#ff6846]" size={40} />
      <h3 className="text-2xl font-bold">No paws found</h3>
      <p className="mt-2 text-[#6d6b64]">Try another name or category.</p>
    </div>
  );
}
