import { Dispatch, RefObject, SetStateAction, useEffect, useState } from "react";
import { getData } from "../utils/getData";
import { useResponseContext } from '../contexts/PopupResponseContext'

interface UseDataResult<T> {
    data: T | null;
    setRefresh: Dispatch<SetStateAction<boolean | null>>;
    error: string | null;
    loading: boolean;
}

export function useData<T>(path: string, ref: RefObject<HTMLElement>, dependencies: any[] = [], reset: boolean = false): UseDataResult<T> {
    const { setErrorHandler, setLoadingHandler } = useResponseContext();
    const [data, setData] = useState<T | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [refresh, setRefresh] = useState<boolean | null>(null);
    useEffect(() => {
        (async () => {
            if (refresh === false || refresh === true) {
                setLoadingHandler(true);
                await getData(path, {
                    setStateData: setData,
                    setStateLoading: setLoading,
                    setStateError: setError,
                    ref,
                });
                setLoadingHandler(false);
            }
        })();
    }, [refresh]);

    useEffect(() => {
        (async () => {
            if (reset) {
                setData(null);
            }
            setLoadingHandler(true);
            await getData(path, {
                setStateData: setData,
                setStateLoading: setLoading,
                setStateError: setError,
                ref,
            });
            setLoadingHandler(false);
        })()
    }, [...dependencies]);

    useEffect(() => {
        if(!error) return;
        setErrorHandler(error);
    }, [error])

    return { data, setRefresh, error, loading };
};
