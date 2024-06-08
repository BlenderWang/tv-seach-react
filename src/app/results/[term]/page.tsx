import type { SearchResults } from "@/models/Shows";
import fetchShows from "@/lib/fetchShows";
import ShowGontainer from "@/app/components/ShowContainer";

type Props = {
    params: {
        term: string;
    };
};

export function generateMetadata({ params: { term } }: Props) {
    return {
        title: `Results for ${term}`,
    };
}

export default async function SearchResults({ params: { term } }: Props) {
    const url = `https://api.tvmaze.com/search/shows?q=${term}`;

    const results: SearchResults | undefined = await fetchShows(url);
    // console.log("search", results);

    if (!results || results.length < 1)
        return <h2 className="m-4 text-2xl font-bold">No Shows Found</h2>;

    // return <Shows show={term} />;
    return (
        <section className="px-2 my-3 grid gap-2 grid-cols-gallery lg:grid-cols-3 xl:grid-cols-4">
            {results.map((res) => (
                <ShowGontainer key={res.show.id} show={res.show} />
            ))}
        </section>
    );
}
