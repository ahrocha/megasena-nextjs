"use client"; // Enables client-side behavior in App Router

import { useEffect, useState } from "react";

interface MegasenaData {
  nrSorteio: number;
  dtSorteio: string;
  dsSorteadosSorteio: string;
}

export default function Home() {
  const [megasenaData, setMegasenaData] = useState<MegasenaData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("https://api.megasena.hurpia.com.br/megasena/ultima");
        if (!res.ok) throw new Error("Failed to fetch Mega Sena data");
        const data = await res.json();
        setMegasenaData(data);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred");
        }
      }
    }

    fetchData();
  }, []);

  if (error) return <p className="text-red-500">Error: {error}</p>;
  if (!megasenaData) return <p>Loading...</p>;
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="flex gap-4 items-center flex-col">
        <h1 className="text-medium block text-center">
            Sorteio Número: <br /> {megasenaData.nrSorteio}
          </h1>
          <h1 className="text-medium block text-center">
            Data do Sorteio: <br /> {new Date(megasenaData.dtSorteio).toLocaleDateString()}
          </h1>
          <h2 className="text-4xl block text-center">
            Números Sorteados: <br /> {megasenaData.dsSorteadosSorteio}
          </h2>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">

      </footer>
    </div>
  );
}
