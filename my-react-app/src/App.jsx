import { useState } from 'react'

function App() {
  const [selectedType, setSelectedType] = useState('')

  function getMatchup(type) {
    // API CALL WILL GO HERE, AND WE WILL RETURN THE RESPONSE
    return `Fake API response: You are fighting a ${type}-type Pokémon.`;
  }

  function handleTypeClick(type) {
    const response = getMatchup(type);
    setSelectedType(response);
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-amber-50 px-5 py-12 text-slate-900">
      <section className="w-full max-w-lg rounded-3xl border-2 border-slate-900 bg-white p-7 shadow-[6px_6px_0_#1e293b] sm:p-10">
        <div className="mb-8 flex items-center gap-3">
          <span aria-hidden="true" className="relative block h-8 w-8 overflow-hidden rounded-full border-2 border-slate-900 bg-white before:absolute before:inset-x-0 before:top-0 before:h-1/2 before:bg-red-500 after:absolute after:left-1/2 after:top-1/2 after:h-3 after:w-3 after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-full after:border-2 after:border-slate-900 after:bg-white" />
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">Trainer toolkit</span>
        </div>

        <h1 className="text-3xl font-black tracking-tight sm:text-4xl">Battle assistant</h1>
        <p className="mt-3 text-slate-600">What type of Pokémon are you facing?</p>

        <div className="mt-7 grid grid-cols-2 gap-3">
          {[
            ['Fire', 'bg-orange-100 hover:bg-orange-200'],
            ['Water', 'bg-sky-100 hover:bg-sky-200'],
            ['Grass', 'bg-green-100 hover:bg-green-200'],
            ['Ground', 'bg-amber-100 hover:bg-amber-200'],
          ].map(([type, color]) => (
            <button
              key={type}
              className={`rounded-xl border-2 border-slate-900 px-4 py-3 font-bold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500 ${color}`}
              onClick={() => handleTypeClick(type.name)}
              type="button"
            >
              {type}
            </button>
          ))}
        </div>

        {selectedType && <p className="mt-5 text-slate-700">{selectedType}</p>}
      </section>
    </main>
  )
}

export default App
