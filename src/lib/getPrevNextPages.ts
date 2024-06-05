import type { ShowsResults } from "@/models/Shows";

function getPageNumber(url: string) {
    const { searchParams } = new URL(url);
    return searchParams.get("page");
}

export default function getPrevNextPages(shows: ShowsResults) {
    let nextPage = shows?.next_page ? getPageNumber(shows.next_page) : null;

    const prevPage = shows?.prev_page ? getPageNumber(shows.prev_page) : null;

    const totalPages =
        shows.total_results % shows.per_page
            ? Math.ceil(shows.total_results / shows.per_page)
            : shows.total_results / shows.per_page + 1;

    if (prevPage && parseInt(prevPage) + 5 < totalPages) {
        nextPage = (parseInt(prevPage) + 5).toString();
    }

    if (nextPage && parseInt(nextPage) >= totalPages) nextPage = null;

    return { prevPage, nextPage };
}
