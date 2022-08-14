import { useEffect } from "react";
import { FileType, useFileDrop } from "../../../hooks/useFileDrop";

interface Props {
    defaultValue: string;
    fileType: FileType;
    multiple?: boolean;
    customClassName?: string;
    handler: (files: File[] | null) => void;
}

export const FileDrop = ({ customClassName, defaultValue, fileType, multiple = false, handler }: Props) => {

    const {
        className, files, value, getInputProps, getRootProps, resetValue
    } = useFileDrop(defaultValue, fileType, multiple, customClassName);

    useEffect(() => {
        if (!files) return;
        handler(files);
        resetValue();
    }, [files]);

    return (
        <div {...getRootProps({ className, onDragLeave: resetValue })}>
            <input {...getInputProps()} />
            {value}
        </div>
    );
};
