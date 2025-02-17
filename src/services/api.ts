export interface MegasenaData {
    nrSorteio: number;
    dtSorteio: string;
    dsSorteadosSorteio: string;
}

export async function fetchMegaSenaData(): Promise<MegasenaData | null> {
try {
    const res = await fetch("https://api.megasena.hurpia.com.br/megasena/ultima");
    if (!res.ok) throw new Error("Failed to fetch Mega Sena data");
    return await res.json();
} catch (err: unknown) {
    console.error("Error fetching Mega Sena data:", err);
    return null;
}
}
