export interface MegasenaData {
    numero: number;
    data: string;
    sorteados: string;
    next: number | null;
    previous: number | null;
}

const server = "https://api.megasena.hurpia.com.br";
// const server = "http://localhost:8080";

export async function fetchMegaSenaData(): Promise<MegasenaData | null> {
    try {
        const res = await fetch(server + "/megasena/ultima");
        if (!res.ok) throw new Error("Failed to fetch Mega Sena data");
        return await res.json();
    } catch (err: unknown) {
        console.error("Error fetching Mega Sena data:", err);
        return null;
    }
}

export async function fetchMegaSenaDataByNumber(nr: string): Promise<MegasenaData | null> {
    try {
        const res = await fetch(`${server}/megasena/${nr}`);
        if (!res.ok) throw new Error("Failed to fetch Mega Sena data for draw " + nr);
        return await res.json();
    } catch (err: unknown) {
        console.error("Error fetching Mega Sena data for draw", nr, err);
        return null;
    }
}

export async function fetchAllMegaSenaData(): Promise<MegasenaData[] | null> {
    try {
        const res = await fetch(server + "/megasena");
        if (!res.ok) throw new Error("Failed to fetch Mega Sena data");
        return await res.json();
    } catch (err: unknown) {
        console.error("Error fetching Mega Sena data:", err);
        return null;
    }
}

export async function userLogin(email: string, password: string): Promise<boolean> {
    try {
        const url = server + "/auth/login";
        const res = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
            credentials: "include",
        });
        if (!res.ok) throw new Error("Failed to login");
        console.log(res.json());
        return res.status === 200;
    } catch (err: unknown) {
        console.error("Error logging in:", err);
        return false;
    }
}