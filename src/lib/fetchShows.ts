import type { SearchResults, ShowsResults } from "@/models/Shows";
import { ShowsSchema, SearchSchema } from "@/models/Shows";

export default async function fetchShows(
    url: string
): Promise<ShowsResults | SearchResults | undefined> {
    try {
        const res = await fetch(url);

        if (!res.ok) {
            throw new Error("Fetch Show Info error!\n" + res.statusText);
        }

        const data: ShowsResults | SearchResults = await res.json();

        if (url.includes("search")) {
            const parsedData = SearchSchema.parse(data);
            // console.log(data);
            if (parsedData.length === 0) return undefined;
            return parsedData;
        } else {
            // parse data with Zod schema
            const parsedData = ShowsSchema.parse(data);
            // console.log(parsedData[1]);

            if (parsedData.length === 0) return undefined;
            return parsedData;
        }
    } catch (error) {
        if (error instanceof Error) {
            console.log(error.stack);
        }
    }
}
