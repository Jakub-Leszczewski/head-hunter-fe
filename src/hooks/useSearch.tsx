import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import axios, { Canceler, AxiosError } from 'axios';
import { apiUrl } from '../config';

// Wszystkie możliwe właściwoście queries w filtracji kursantów
export interface Queries {
    // ...
}

export interface Page {
    prev: number | null;
    current: number;
    next: number | null;
}

export interface SearchResult<T> {
    data: T[];
    loading: boolean;
    hasMore: boolean;
    amount: number;
    page: number;
    refresh: boolean;
    searchPhrase: string;
    handleSearchPhraseChange: (text: string) => void;
    setPage: Dispatch<SetStateAction<number>>;
    setRefresh: Dispatch<SetStateAction<boolean>>;
}

export function useSearch<T>(collection: string, limit: number, queries: Queries = {}, dependencies: any[] = []): SearchResult<T> {

    const stringify = () => {
        return {
            ...queries,
        };
    };

    const debounceTimeoutId = useRef<NodeJS.Timeout | null>(null);
    const delayTimeoutId = useRef<NodeJS.Timeout | null>(null);

    const [refresh, setRefresh] = useState(false);
    const [page, setPage] = useState(1);
    const [searchPhrase, setSearchPhrase] = useState('');
    const [stringifyQueries, setstringifyQueries] = useState(stringify());
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState<any[]>([]);
    const [hasMore, setHasMore] = useState(false);
    const [amount, setAmount] = useState(0);
    const [search, setSearch] = useState('');
    const handleSearchPhraseChange = (text: string) => {
        setSearchPhrase(text);
    };


    useEffect(() => {
        setData([]);
        setLoading(true);
    }, [search, stringifyQueries, refresh]);

    useEffect(() => {
        if (debounceTimeoutId.current) {
            clearTimeout(debounceTimeoutId.current);
        }
        debounceTimeoutId.current = setTimeout(() => {
            setPage(1);
            setSearch(searchPhrase);
            if (JSON.stringify(stringifyQueries) !== JSON.stringify(stringify())) {
                setstringifyQueries(stringify());
            }
        }, 500);
        return clearTimeout();
    }, [searchPhrase, ...dependencies]);

    useEffect(() => {
        const startTime = new Date().valueOf();
        if (delayTimeoutId.current) {
            clearTimeout(delayTimeoutId.current);
        }
        if (data.length === 0) {
            setLoading(true);
        }
        let cancel: Canceler;
        axios({
            method: 'GET',
            url: `${apiUrl}/${collection}`,
            params: {
                search: search,
                page: page,
                limit,
                ...queries,
            },
            cancelToken: new axios.CancelToken(c => cancel = c),
        })
            .then(res => {
                const endTime = new Date().valueOf();
                delayTimeoutId.current = setTimeout(() => {
                    setLoading(false);
                    setAmount(res.data.amount);
                    setData(prev => [...prev, ...res.data.results]);
                    setHasMore(res.data.results.length > 0);
                }, endTime - startTime < 500 ? 500 - (endTime - startTime) : 0);
            })
            .catch((e: AxiosError) => {
                const endTime = new Date().valueOf();
                delayTimeoutId.current = setTimeout(() => {
                    if (axios.isCancel(e)) return;
                    console.warn(e.message);
                    setLoading(false);
                }, endTime - startTime < 500 ? 500 - (endTime - startTime) : 0);
            });

        return () => {
            if (delayTimeoutId.current) {
                clearTimeout(delayTimeoutId.current);
            }
            cancel();
        }

    }, [search, page, collection, stringifyQueries, refresh]);

    return { loading, data, hasMore, amount, page, refresh, searchPhrase, setPage, setRefresh, handleSearchPhraseChange };
};