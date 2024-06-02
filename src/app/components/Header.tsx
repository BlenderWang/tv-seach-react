"use client";

import React, { useState } from "react";
import { SiZincsearch } from "react-icons/si";
import Searchbar from "./Searchbar";
import useFetch from "../hooks/useFetch";

const Header = () => {
    const [query, setQuery] = useState("");
    const [items, setItems] = useState([]);
    const { data, error, loading } = useFetch(
        `https://api.tvmaze.com/search/shows?q=${query}`
    );

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
    };

    const searchedItems = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        console.log(data);
    };

    return (
        <div>
            <a href="/">
                <SiZincsearch className="text-3xl" />
            </a>

            <Searchbar
                query={query}
                onChange={onChange}
                onSubmit={searchedItems}
            />
        </div>
    );
};

export default Header;
