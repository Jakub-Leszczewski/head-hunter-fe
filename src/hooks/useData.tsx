import { Dispatch, RefObject, SetStateAction, useEffect, useState } from "react";
import { getData } from "../utils/getData";

interface UseDataResult<T> {
    data: T | null;
    setRefresh: Dispatch<SetStateAction<boolean | null>>;
    error: string | null;
    loading: boolean;
}

export function useData<T>(path: string, ref: RefObject<HTMLElement>, dependencies: any[] = [], reset: boolean = false): UseDataResult<T> {
    const [data, setData] = useState<T | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [refresh, setRefresh] = useState<boolean | null>(null);
    useEffect(() => {
        if (refresh === false || refresh === true) {
            getData(path, {
                setStateData: setData,
                setStateLoading: setLoading,
                setStateError: setError,
                ref,
            });
        }
    }, [refresh]);

    useEffect(() => {
        (async () => {
            if (reset) {
                setData(null);
            }
            await getData(path, {
                setStateData: setData,
                setStateLoading: setLoading,
                setStateError: setError,
                ref,
            });
        })()
    }, [...dependencies]);

    return { data, setRefresh, error, loading };
};
