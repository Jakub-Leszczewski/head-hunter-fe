import { Dispatch, RefObject, SetStateAction } from "react";
import { fetchApiTool } from "./fetchHelpers";
import { setError } from './setError'

interface Options {
    setStateData: Dispatch<SetStateAction<any>>;
    setStateLoading: Dispatch<SetStateAction<boolean>>;
    setStateError: Dispatch<SetStateAction<string | null>>;
    ref: RefObject<HTMLElement>;
}

export const getData = async (path: string, options: Options) => {
    const { setStateData, setStateError, setStateLoading, ref } = options;

    const startTime = new Date().valueOf();
    const response = await fetchApiTool(path);
    if(!ref.current) return;
    if (!response.status) {
        setStateError(setError(response.error));
        setStateLoading(false);
        return
    }
    const endTime = new Date().valueOf();
    setTimeout(() => {
        if (!ref.current) return;
        setStateData(response.results);
    }, endTime - startTime < 500 ? 500 - (endTime - startTime) : 0);
};
