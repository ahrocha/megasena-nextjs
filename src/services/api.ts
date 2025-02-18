export interface MegasenaData {
    nrSorteio: number;
    dtSorteio: string;
    dsSorteadosSorteio: string;
    next: number | null;
    previous: number | null;
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

export async function fetchMegaSenaDataByNumber(nr: string): Promise<MegasenaData | null> {
    try {
        const res = await fetch(`https://api.megasena.hurpia.com.br/megasena/${nr}`);
        if (!res.ok) throw new Error("Failed to fetch Mega Sena data for draw " + nr);
        return await res.json();
    } catch (err: unknown) {
        console.error("Error fetching Mega Sena data for draw", nr, err);
        return null;
    }
}