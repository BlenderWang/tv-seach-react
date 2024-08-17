"use client";

import React from "react";
import useFetch from "../hooks/useFetch";
import Link from "next/link";

interface ShowsProps {
  id: number;
  rating: {
    average: number;
  };
  name: string;
  image: {
    medium: string;
  };
}

const TopShows = () => {
  const { data, error, loading } = useFetch<ShowsProps[]>(
    "https://api.tvmaze.com/shows",
  );

  return (
    <>
      TopShows:{" "}
      <section className="flex flex-wrap items-center gap-2">
        {loading
          ? "loading..."
          : data && data.length > 0
            ? (data as ShowsProps[])
                .filter((show) => show.rating && show.rating.average)
                .sort((a, b) => b.rating.average - a.rating.average)
                .slice(0, 10)
                .map((show) => (
                  <div key={show.id}>
                    <img src={show.image.medium} alt={show.name} />
                    <Link href={`https://api.tvmaze.com/shows/${show.id}`}>
                      {show.name}
                    </Link>
                  </div>
                ))
            : error}
      </section>
    </>
  );
};

export default TopShows;
