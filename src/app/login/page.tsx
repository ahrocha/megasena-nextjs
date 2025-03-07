"use client";

import { useState } from "react";
import { userLogin } from "@/services/api";

export default function LoginPage() {

    const [email, setEmail] = useState<string | null>(null);
    const [password, setPassword] = useState<string | null>(null);

    const user = {
        email: null,
        password: null,
    }

    if (user.email) {
        console.log("User is logged in")
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (email && password) {
            console.log("Logging in user", email, password);
            const success = await userLogin(email, password);
            if (success) {
                console.log("User logged in successfully");
                console.log(success);
            } else {
                console.log("Failed to log in");
            }
        }
    }

    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <h1 className="text-4xl font-bold">Login</h1>
            <form className="grid gap-4">
                <label>
                    <span>Email</span>
                    <input type="email" onChange={(e) => setEmail(e.target.value)} />
                </label>
                <label>
                    <span>Password</span>
                    <input type="password" onChange={(e) => setPassword(e.target.value)} />
                </label>
                <button type="submit" onClick={handleSubmit}>Login</button>
            </form>
            <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
        </div>
    )
}