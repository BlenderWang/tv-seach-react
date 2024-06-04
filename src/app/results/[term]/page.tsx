import Shows from "../../components/Shows";

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

export default function SearchResults({ params: { term } }: Props) {
    return <Shows show={term} />;
}
