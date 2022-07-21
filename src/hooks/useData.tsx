import { Dispatch, RefObject, SetStateAction, useEffect, useState } from "react";
import { getData } from "../utils/getData";

export function useData<T>(path: string, ref: RefObject<HTMLElement>, dependencies: any[] = [], reset: boolean = false): { data: T | null, setRefresh: Dispatch<SetStateAction<boolean | null>> } {
    const [data, setData] = useState<T | null>(null);
    const [refresh, setRefresh] = useState<boolean | null>(null);
    useEffect(() => {
        if (refresh === false || refresh === true) {
            getData(path, setData, ref);
        }
    }, [refresh]);

    useEffect(() => {
        if (reset) {
            setData(null);
        }
        getData(path, setData, ref);
    }, [...dependencies]);
    return { data, setRefresh };
};