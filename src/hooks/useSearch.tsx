import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import axios, { Canceler, AxiosError } from 'axios';
import { apiUrl } from '../config';
import { FindAllQueryFilter } from 'types';
import { FreeInternship, StudentsFilterState } from '../reducers/studentsFilterReducer';
import { useResponseContext } from '../contexts/PopupResponseContext'

const instance = axios.create();
instance.defaults.withCredentials = true;

export interface Page {
    prev: number | null;
    current: number;
    next: number | null;
}

export interface SearchResult<T> {
    data: T[];
    loading: boolean;
    error: string | null;
    hasMore: boolean;
    amount: number;
    page: number;
    refresh: boolean;
    searchPhrase: string;
    handleSearchPhraseChange: (text: string) => void;
    setPage: Dispatch<SetStateAction<number>>;
    setRefresh: Dispatch<SetStateAction<boolean>>;
}

const setInternship = (option: FreeInternship | undefined) => {
    switch (option) {
        case 'no':
            return [false];
        case 'yes':
            return [true];
        default:
            break;
    }
};

export function useSearch<T>(collection: string, queries: Partial<StudentsFilterState> = {}, dependencies: any[] = []): SearchResult<T> {
    const { setErrorHandler } = useResponseContext();
    const stringify = (): Partial<FindAllQueryFilter> => {
        const { canTakeApprenticeship, expectedSalary, expectedTypeWork, expectedContractType, monthsOfCommercialExp, courseCompletion, courseEngagement, projectDegree, teamProjectDegree } = queries;
        return {
            courseCompletion: courseCompletion || undefined,
            courseEngagement: courseEngagement || undefined,
            projectDegree: projectDegree || undefined,
            teamProjectDegree: teamProjectDegree || undefined,
            salaryMax: expectedSalary?.max || undefined,
            salaryMin: expectedSalary?.min || undefined,
            canTakeApprenticeship: setInternship(canTakeApprenticeship),
            monthsOfCommercialExp: monthsOfCommercialExp || undefined,
            typeWork: expectedTypeWork,
            contractType: expectedContractType,
        };
    };

    const debounceTimeoutId = useRef<NodeJS.Timeout | null>(null);
    const delayTimeoutId = useRef<NodeJS.Timeout | null>(null);

    const [refresh, setRefresh] = useState(false);
    const [page, setPage] = useState(1);
    const [searchPhrase, setSearchPhrase] = useState('');
    const [stringifyQueries, setStringifyQueries] = useState<Partial<FindAllQueryFilter>>(stringify());
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
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
                setStringifyQueries(stringify());
            }
        }, 500);
        return clearTimeout();
    }, [searchPhrase, ...dependencies]);

    useEffect(() => {
        setError(null);
        const startTime = new Date().valueOf();
        if (delayTimeoutId.current) {
            clearTimeout(delayTimeoutId.current);
        }
        if (data.length === 0) {
            setLoading(true);
        }
        let cancel: Canceler;
        instance({
            method: 'GET',
            url: `${apiUrl}/${collection}`,
            params: {
                search: search,
                page: page,
                ...stringifyQueries,
            },
            cancelToken: new axios.CancelToken(c => cancel = c),
        })
            .then(res => {
                const endTime = new Date().valueOf();
                delayTimeoutId.current = setTimeout(() => {
                    setLoading(false);
                    setAmount(res.data.amount);
                    setData(prev => [...prev, ...res.data.result]);
                    setHasMore(res.data.result.length > 0);
                }, endTime - startTime < 500 ? 500 - (endTime - startTime) : 0);
            })
            .catch((e: AxiosError) => {
                const endTime = new Date().valueOf();
                delayTimeoutId.current = setTimeout(() => {
                    if (axios.isCancel(e)) return;
                    setLoading(false);
                    setErrorHandler('Przepraszamy wystąpił błąd, spróbuj ponownie później.')
                }, endTime - startTime < 500 ? 500 - (endTime - startTime) : 0);
        });

        return () => {
            if (delayTimeoutId.current) {
                clearTimeout(delayTimeoutId.current);
            }
            cancel();
        }

    }, [search, page, collection, stringifyQueries, refresh]);

    return { loading, error, data, hasMore, amount, page, refresh, searchPhrase, setPage, setRefresh, handleSearchPhraseChange };
};
