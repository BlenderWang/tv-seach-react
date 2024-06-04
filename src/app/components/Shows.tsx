import fetchShows from "@/lib/fetchShows";
import type { ShowsResults } from "@/models/Shows";
import ShowGontainer from "./ShowContainer";
// import addBlurredDataUrls from "@/lib/getBase64";

export default async function Shows() {
    const url = "https://api.tvmaze.com/shows";

    const shows: ShowsResults | undefined = await fetchShows(url);

    if (!shows)
        return <h2 className="m-4 text-2xl font-bold">No Shows Found</h2>;

    // const showsWithBlur = await addBlurredDataUrls(shows);

    console.log(shows);

    return (
        <section className="px-2 my-3 grid gap-2 grid-cols-gallery">
            {/* <h2 className="m-4 text-2xl font-bold">Shows</h2> */}
            {shows
                .sort(
                    (a, b) => (b.rating.average ?? 0) - (a.rating.average ?? 0)
                )
                .slice(0, 15)
                .map((show) => (
                    <ShowGontainer key={show.id} show={show} />
                ))}
        </section>
    );
}
