"use client";

import { useEffect, useState } from "react";
import { fetchMegaSenaDataByNumber, MegasenaData } from "@/services/api";
import MegasenaResults from "@/components/MegasenaResults";
import { useParams, useRouter } from "next/navigation";

export default function MegaSenaDrawPage() {
  const params = useParams();
  const router = useRouter();
  const [megasenaData, setMegasenaData] = useState<MegasenaData | null>(null);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    if (!params.nr || typeof params.nr !== "string") {
      setError("Invalid draw number");
      return;
    }
    
    fetchMegaSenaDataByNumber(params.nr)
      .then((data) => {
        if (data) {
          setMegasenaData(data);
        } else {
          setError("No data found for this draw number");
          // redirect to /megasena/ultima
          router.push("/megasena/ultima");
        }
      })
      .catch((err) => setError(err.message));
  }, [params.nr, router]);
  
  if (error) return <p className="text-red-500">Error: {error}</p>;
  if (!megasenaData) return <p>Loading...</p>;
  
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <MegasenaResults megasenaData={megasenaData} />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
