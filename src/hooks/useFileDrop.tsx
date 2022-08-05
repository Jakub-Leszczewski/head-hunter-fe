import { useEffect, useMemo, useState } from "react";
import { useDropzone } from "react-dropzone";

export type FileType = 'csv';

export const useFileDrop = (defalutValue: string, fileType: FileType, multiple: boolean, customClassName: string | null = null) => {

    const [value, setValue] = useState(defalutValue);
    const [files, setFiles] = useState<File[] | null>(null);

    const getCorrectFormat = () => {
        switch (fileType) {
            case 'csv':
                return 'text/csv';
        }
    };

    const resetValue = () => {
        setValue(defalutValue);
    };

    const validation = (type: string) => {
        if (fileType === 'csv') {
            if (type === 'text/csv') {
                setValue('Wygląda dobrze');
            } else if (!type) {
                setValue('Zobaczymy co da się z tym zrobic');
            } else {
                setValue('Zły format pliku');
            }
        }
        return null;
    };

    const {
        getRootProps,
        getInputProps,
        acceptedFiles,
        isFocused,
        isDragAccept,
        isDragReject,
    } = useDropzone({
        accept: {
            [getCorrectFormat()]: [],
        },
        multiple,
        validator: (file) => validation(file.type),
    });

    const className = useMemo(() => {
        const classNames = customClassName ? [customClassName, 'filedrop'] : ['filedrop'];
        if (isFocused) {
            classNames.push('filedrop--focus');
        }
        if (isDragAccept) {
            classNames.push('filedrop--accept');
        }
        if (isDragReject) {
            classNames.push('filedrop--reject');
        }
        return classNames.join(' ');
    }, [
        isFocused,
        isDragAccept,
        isDragReject,
    ]);

    useEffect(() => {
        setFiles(acceptedFiles);
    }, [acceptedFiles]);

    return { className, files, value, getInputProps, getRootProps, resetValue };
};