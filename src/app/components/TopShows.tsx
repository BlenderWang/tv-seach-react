"uuse client";

import React from "react";
import useFetch from "../hooks/useFetch";

interface ShowsProps {
    id: number;
    rating: {
        average: number;
    };
    name: string;
}

const TopShows = () => {
    const { data, error, loading } = useFetch<ShowsProps[]>(
        "https://api.tvmaze.com/shows"
    );

    return (
        <div>
            TopShows:{" "}
            {loading
                ? "loading..."
                : data && data.length > 0
                ? (data as ShowsProps[])
                      .filter((show) => show.rating && show.rating.average)
                      .sort((a, b) => b.rating.average - a.rating.average)
                      .slice(0, 10)
                      .map((show) => <div key={show.id}>{show.name}</div>)
                : error}
        </div>
    );
};

export default TopShows;
