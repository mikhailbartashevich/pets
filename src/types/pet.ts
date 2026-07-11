export type PetCategory = "Dogs" | "Cats" | "Small pets";
export type PetFilter = "All friends" | PetCategory;

export type Pet = {
  id: number;
  name: string;
  type: PetCategory;
  breed: string;
  age: string;
  tone: string;
  image: string;
};
