import { useMemo, useState } from "react";
import { Gallery } from "./components/Gallery";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Story } from "./components/Story";
import { pets } from "./data/pets";
import type { Pet, PetFilter } from "./types/pet";

function App() {
  const [filter, setFilter] = useState<PetFilter>("All friends");
  const [query, setQuery] = useState("");
  const [favorites, setFavorites] = useState<Set<number>>(() => new Set([2]));

  const visiblePets = useMemo(() => {
    const normalizedQuery = query.toLowerCase();

    return pets.filter((pet) => {
      const matchesType = filter === "All friends" || pet.type === filter;
      const matchesQuery = `${pet.name} ${pet.breed}`.toLowerCase().includes(normalizedQuery);
      return matchesType && matchesQuery;
    });
  }, [filter, query]);

  const toggleFavorite = (id: Pet["id"]) => {
    setFavorites((current) => {
      const next = new Set(current);

      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }

      return next;
    });
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#fffaf4] text-[#22221f]">
      <Header />
      <Hero />
      <Gallery
        favorites={favorites}
        filter={filter}
        pets={visiblePets}
        query={query}
        onFilterChange={setFilter}
        onQueryChange={setQuery}
        onToggleFavorite={toggleFavorite}
      />
      <Story />
    </main>
  );
}

export default App;
