"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

interface SearchbarProps {
    query: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

const Searchbar = () => {
    const [query, setQuery] = useState("");
    const router = useRouter();
    // const [items, setItems] = useState([]);
    // const { data, error, loading } = useFetch(
    //     `https://api.tvmaze.com/search/shows?q=${query}`
    // );

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        router.push(`/results/${query}`);
        setQuery("");
    };

    return (
        <form
            className="flex justify-center md:justify-between"
            onSubmit={handleSubmit}
        >
            <input
                type="text"
                className="bg-white p-2 w-[260px] sm:w-80 text-xl rounded text-black"
                value={query}
                onChange={handleChange}
                placeholder="i.e. Dorahodora"
            />
            {/* <button className="button" type="submit">
                <i className="fas fa-search"></i>
            </button> */}
        </form>
    );
};

export default Searchbar;
