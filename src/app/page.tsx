"use client";

import Image from "next/image";
import TopShows from "./components/TopShows";

export default function Home() {
    return (
        <main className="py-2">
            <div>
                page
                <TopShows />
            </div>
        </main>
    );
}
