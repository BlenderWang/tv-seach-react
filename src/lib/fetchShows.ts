import type { SearchResults, ShowsResults } from "@/models/Shows";
import { ShowsSchemaWithLinks } from "@/models/Shows";

export default async function fetchShows(
    url: string
): Promise<ShowsResults | SearchResults | undefined> {
    try {
        const res = await fetch(url);

        if (!res.ok) {
            throw new Error("Fetch Show Info error!\n" + res.statusText);
        }

        const showsResults: ShowsResults | SearchResults = await res.json();
        // console.log(showsResults);

        // parse data with Zod schema
        // const parsedData = ShowsSchemaWithLinks.parse(showsResults);
        // console.log(parsedData);

        // if (parsedData.length === 0) return undefined;
        // return parsedData;

        return showsResults;
    } catch (error) {
        if (error instanceof Error) {
            console.log(error.stack);
        }
    }
}
