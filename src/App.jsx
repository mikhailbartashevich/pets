import { useMemo, useState } from 'react'
import { ArrowUpRight, Heart, Menu, PawPrint, Search, X } from 'lucide-react'

const pets = [
  { id: 1, name: 'Mochi', type: 'Cats', breed: 'British Shorthair', age: '2 years', tone: 'bg-[#e9d7c5]', image: 'https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&w=1000&q=85' },
  { id: 2, name: 'Sunny', type: 'Dogs', breed: 'Golden Retriever', age: '4 years', tone: 'bg-[#d8b482]', image: 'https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=1000&q=85' },
  { id: 3, name: 'Pepper', type: 'Cats', breed: 'Tuxedo cat', age: '1 year', tone: 'bg-[#dad8d4]', image: 'https://images.unsplash.com/photo-1495360010541-f48722b34f7d?auto=format&fit=crop&w=1000&q=85' },
  { id: 4, name: 'Otis', type: 'Dogs', breed: 'Dachshund', age: '3 years', tone: 'bg-[#c68b60]', image: 'https://images.unsplash.com/photo-1612195583950-b8fd34c87093?auto=format&fit=crop&w=1000&q=85' },
  { id: 5, name: 'Bean', type: 'Small pets', breed: 'Mini Lop', age: '8 months', tone: 'bg-[#d9c9bb]', image: 'https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?auto=format&fit=crop&w=1000&q=85' },
  { id: 6, name: 'Coco', type: 'Dogs', breed: 'Chocolate Lab', age: '5 years', tone: 'bg-[#9c765c]', image: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=1000&q=85' },
  { id: 7, name: 'Luna', type: 'Cats', breed: 'Siamese', age: '3 years', tone: 'bg-[#d7cec3]', image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=1000&q=85' },
  { id: 8, name: 'Rio', type: 'Small pets', breed: 'Parakeet', age: '2 years', tone: 'bg-[#9cc8bd]', image: 'https://images.unsplash.com/photo-1552728089-57bdde30beb3?auto=format&fit=crop&w=1000&q=85' },
]

const filters = ['All friends', 'Dogs', 'Cats', 'Small pets']

function App() {
  const [filter, setFilter] = useState('All friends')
  const [query, setQuery] = useState('')
  const [favorites, setFavorites] = useState(new Set([2]))
  const [menuOpen, setMenuOpen] = useState(false)

  const visiblePets = useMemo(() => pets.filter((pet) => {
    const matchesType = filter === 'All friends' || pet.type === filter
    const matchesQuery = `${pet.name} ${pet.breed}`.toLowerCase().includes(query.toLowerCase())
    return matchesType && matchesQuery
  }), [filter, query])

  const toggleFavorite = (id) => setFavorites((current) => {
    const next = new Set(current)
    next.has(id) ? next.delete(id) : next.add(id)
    return next
  })

  return (
    <main className="min-h-screen overflow-hidden bg-[#fffaf4] text-[#22221f]">
      <header className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-6 sm:px-8 lg:px-12">
        <a href="#" className="flex items-center gap-2 text-xl font-extrabold tracking-[-0.04em]">
          <span className="grid size-9 rotate-[-8deg] place-items-center rounded-xl bg-[#ff6846] text-white"><PawPrint size={20} /></span>
          pawfolio
        </a>
        <nav className="hidden items-center gap-8 text-sm font-semibold md:flex">
          <a href="#gallery" className="hover:text-[#ff6846]">Explore</a>
          <a href="#story" className="hover:text-[#ff6846]">Our story</a>
          <a href="#share" className="rounded-full bg-[#22221f] px-5 py-3 text-white transition hover:-translate-y-0.5 hover:bg-[#ff6846]">Share your pet</a>
        </nav>
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen ? <X /> : <Menu />}</button>
      </header>

      {menuOpen && <nav className="mx-5 mb-4 grid gap-3 rounded-2xl bg-white p-5 text-sm font-semibold shadow-lg md:hidden"><a href="#gallery">Explore</a><a href="#story">Our story</a><a href="#share">Share your pet</a></nav>}

      <section className="mx-auto grid max-w-[1400px] items-center gap-10 px-5 pb-16 pt-10 sm:px-8 lg:grid-cols-[1.06fr_.94fr] lg:px-12 lg:pb-24 lg:pt-16">
        <div>
          <span className="mb-6 inline-flex rotate-[-2deg] items-center gap-2 rounded-full border border-[#22221f]/15 bg-[#ffd85c] px-4 py-2 text-xs font-extrabold uppercase tracking-[.16em]">Curated with love <Heart size={14} fill="currentColor" /></span>
          <h1 className="max-w-3xl text-[clamp(3.7rem,8vw,7.8rem)] font-black leading-[.82] tracking-[-.075em]">Pets worth<br/><span className="font-serif italic text-[#ff6846]">pausing</span> for.</h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-[#64645d] sm:text-xl">A joyful little corner of the internet celebrating the furry, feathered, and wonderfully weird friends who make life better.</p>
          <a href="#gallery" className="group mt-9 inline-flex items-center gap-3 border-b-2 border-[#22221f] pb-1 font-bold">Meet the crew <ArrowUpRight className="transition group-hover:translate-x-1 group-hover:-translate-y-1" size={20}/></a>
        </div>
        <div className="relative mx-auto w-full max-w-[580px]">
          <div className="absolute -left-5 top-10 size-28 rounded-full bg-[#ffd85c] sm:-left-10 sm:size-40" />
          <div className="absolute -right-4 bottom-10 size-24 rounded-[35%] bg-[#83cdbd] sm:-right-8 sm:size-36" />
          <div className="relative rotate-[2deg] overflow-hidden rounded-[2.5rem] border-[10px] border-white bg-[#dcc9b5] shadow-[0_25px_70px_rgba(71,51,34,.18)]">
            <img className="aspect-[4/4.2] w-full object-cover" src="https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?auto=format&fit=crop&w=1200&q=90" alt="Happy dog outdoors" />
            <div className="absolute bottom-5 left-5 rounded-2xl bg-white/90 px-5 py-3 backdrop-blur"><p className="font-extrabold">Walter, 6</p><p className="text-xs text-[#64645d]">Chief happiness officer</p></div>
          </div>
          <span className="absolute -right-2 top-5 rotate-[9deg] rounded-xl bg-[#ff6846] px-4 py-2 text-sm font-bold text-white shadow-lg">goodest boy!</span>
        </div>
      </section>

      <section id="gallery" className="rounded-t-[3rem] bg-[#f3ecdf] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-[1400px]">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div><p className="mb-3 text-xs font-extrabold uppercase tracking-[.2em] text-[#ff6846]">The gallery</p><h2 className="text-4xl font-black tracking-[-.05em] sm:text-6xl">Say hello to everyone.</h2></div>
            <label className="flex w-full max-w-sm items-center gap-3 rounded-full border border-[#22221f]/15 bg-white px-5 py-3.5"><Search size={18}/><input value={query} onChange={(e) => setQuery(e.target.value)} className="min-w-0 flex-1 bg-transparent text-sm outline-none" placeholder="Search by name or breed..." /></label>
          </div>
          <div className="mt-10 flex flex-wrap gap-2">
            {filters.map((item) => <button key={item} onClick={() => setFilter(item)} className={`rounded-full px-5 py-2.5 text-sm font-bold transition ${filter === item ? 'bg-[#22221f] text-white' : 'border border-[#22221f]/15 bg-transparent hover:bg-white'}`}>{item}</button>)}
          </div>
          <div className="mt-10 grid gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {visiblePets.map((pet, index) => <article key={pet.id} className={`group ${index % 3 === 1 ? 'lg:translate-y-8' : ''}`}>
              <div className={`relative overflow-hidden rounded-[1.7rem] ${pet.tone}`}>
                <img src={pet.image} alt={`${pet.name}, ${pet.breed}`} className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-105" loading="lazy" />
                <button onClick={() => toggleFavorite(pet.id)} aria-label={`Favorite ${pet.name}`} className="absolute right-4 top-4 grid size-10 place-items-center rounded-full bg-white/90 transition hover:scale-110"><Heart size={18} className={favorites.has(pet.id) ? 'fill-[#ff6846] text-[#ff6846]' : ''}/></button>
              </div>
              <div className="flex items-start justify-between px-1 pt-4"><div><h3 className="text-xl font-extrabold tracking-tight">{pet.name}</h3><p className="mt-1 text-sm text-[#6d6b64]">{pet.breed} · {pet.age}</p></div><ArrowUpRight className="mt-1 opacity-0 transition group-hover:opacity-100" size={20}/></div>
            </article>)}
          </div>
          {visiblePets.length === 0 && <div className="py-24 text-center"><PawPrint className="mx-auto mb-4 text-[#ff6846]" size={40}/><h3 className="text-2xl font-bold">No paws found</h3><p className="mt-2 text-[#6d6b64]">Try another name or category.</p></div>}
        </div>
      </section>

      <section id="story" className="bg-[#22221f] px-5 py-20 text-[#fffaf4] sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-[1400px] flex-col justify-between gap-10 lg:flex-row lg:items-end"><div><PawPrint className="mb-6 text-[#ffd85c]" size={34}/><h2 className="max-w-3xl text-4xl font-black leading-tight tracking-[-.04em] sm:text-6xl">Life is better with<br/><span className="font-serif italic text-[#83cdbd]">a little fur</span> on it.</h2></div><div id="share" className="max-w-md"><p className="leading-relaxed text-white/60">Every pet has a personality worth celebrating. Send us your favorite photo and tell us what makes your companion one of a kind.</p><button className="mt-6 rounded-full bg-[#ffd85c] px-6 py-3 font-bold text-[#22221f] transition hover:bg-[#ff6846] hover:text-white">Submit a portrait</button></div></div>
      </section>
      <footer className="flex flex-col gap-3 bg-[#22221f] px-5 py-8 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12"><span>© 2026 Pawfolio. Made for animal people.</span><span>Adopt, don’t shop. Be kind, always.</span></footer>
    </main>
  )
}

export default App
