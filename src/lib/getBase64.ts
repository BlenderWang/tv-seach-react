import { getPlaiceholder } from "plaiceholder";
import type { Show, ShowsResults } from "@/models/Shows";

async function getBase64(showUrl: string) {
    try {
        const res = await fetch(showUrl);

        if (!res.ok) {
            throw new Error(
                `Failed to fetch show: ${res.status} ${res.statusText}`
            );
        }

        const buffer = await res.arrayBuffer();

        const { base64 } = await getPlaiceholder(Buffer.from(buffer));

        console.log(base64);

        return base64;
    } catch (e) {
        if (e instanceof Error) console.log(e.stack);
    }
}

export default async function addBlurredDataUrls(
    shows: ShowsResults
): Promise<Show[]> {
    // Make all requests at once instead of awaiting each one - avoiding a waterfall
    const base64Promises = shows.map((show) =>
        getBase64(show.image?.original ?? "")
    );

    // Resolve all requests in order
    const base64Results = await Promise.all(base64Promises);

    const showsWithBlur: Show[] = shows.map((show, i) => {
        show.blurredDataUrl = base64Results[i];
        return show;
    });

    return showsWithBlur;
}
