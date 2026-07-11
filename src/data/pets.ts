import type { Pet, PetFilter } from "../types/pet";

export const pets: Pet[] = [
  {
    id: 1,
    name: "Mochi",
    type: "Cats",
    breed: "British Shorthair",
    age: "2 years",
    tone: "bg-[#e9d7c5]",
    image:
      "https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 2,
    name: "Sunny",
    type: "Dogs",
    breed: "Golden Retriever",
    age: "4 years",
    tone: "bg-[#d8b482]",
    image:
      "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 3,
    name: "Pepper",
    type: "Cats",
    breed: "Tuxedo cat",
    age: "1 year",
    tone: "bg-[#dad8d4]",
    image:
      "https://images.unsplash.com/photo-1495360010541-f48722b34f7d?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 4,
    name: "Otis",
    type: "Dogs",
    breed: "Dachshund",
    age: "3 years",
    tone: "bg-[#c68b60]",
    image:
      "https://images.unsplash.com/photo-1612195583950-b8fd34c87093?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 5,
    name: "Bean",
    type: "Small pets",
    breed: "Mini Lop",
    age: "8 months",
    tone: "bg-[#d9c9bb]",
    image:
      "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 6,
    name: "Coco",
    type: "Dogs",
    breed: "Chocolate Lab",
    age: "5 years",
    tone: "bg-[#9c765c]",
    image:
      "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 7,
    name: "Luna",
    type: "Cats",
    breed: "Siamese",
    age: "3 years",
    tone: "bg-[#d7cec3]",
    image:
      "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 8,
    name: "Rio",
    type: "Small pets",
    breed: "Parakeet",
    age: "2 years",
    tone: "bg-[#9cc8bd]",
    image:
      "https://images.unsplash.com/photo-1552728089-57bdde30beb3?auto=format&fit=crop&w=1000&q=85",
  },
];

export const filters = [
  "All friends",
  "Dogs",
  "Cats",
  "Small pets",
] as const satisfies readonly PetFilter[];
