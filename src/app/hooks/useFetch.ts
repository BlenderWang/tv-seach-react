import { useEffect, useState } from "react";

export type Props<T> = {
    data: T | T[];
    error: any;
    loading: boolean;
};

export default function useFetch<T>(url: string): Props<T> {
    const [data, setData] = useState<T | T[]>([]);
    const [error, setError] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);

            try {
                const res = await fetch(url);
                const json = await res.json();

                setData(json);
                setLoading(false);
            } catch (error: any) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [url]);

    return { data, error, loading };
}
