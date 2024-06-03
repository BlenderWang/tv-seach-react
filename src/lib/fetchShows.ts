import type { ShowsResults } from "@/models/Shows";
import { ShowsSchemaWithLinks } from "@/models/Shows";

export default async function fetchShows(
    url: string
): Promise<ShowsResults | undefined> {
    try {
        const res = await fetch(url);

        if (!res.ok) {
            throw new Error("Fetch Show Info error!\n" + res.statusText);
        }

        const showsResults: ShowsResults = await res.json();
        // console.log(showsResults);

        // parse data with Zod schema
        const parsedData = ShowsSchemaWithLinks.parse(showsResults);
        // console.log(parsedData);

        if (parsedData.length === 0) return undefined;

        return parsedData;
    } catch (error) {
        if (error instanceof Error) {
            console.log(error.stack);
        }
    }
}
