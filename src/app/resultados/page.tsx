"use client";

import { useEffect, useState } from "react";
import { fetchAllMegaSenaData, MegasenaData } from "@/services/api";
import MegasenaResultsRow from "@/components/MegasenaResultsRow";
import { useParams, useRouter } from "next/navigation";

export default function MegaSenaDrawPage() {
  const params = useParams();
  const router = useRouter();
  const [megasenaData, setMegasenaData] = useState<MegasenaData[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    fetchAllMegaSenaData()
      .then((data) => {
        if (data) {
          setMegasenaData(data);
        } else {
          setError("No data found for this draw number");
          router.push("/megasena/ultima");
        }
      })
      .catch((err) => setError(err.message));
  }, [params.nr, router]);
  
  if (error) return <p className="text-red-500">Error: {error}</p>;
  if (!megasenaData) return <p>Loading...</p>;
  
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        {megasenaData.map((megasenaData) => (
          <MegasenaResultsRow key={'row' + `megasenaData.nrSorteio`} megasenaData={megasenaData} />
        ))}
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
